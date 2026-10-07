// BUD-E Google Form Silent Logger & External Integrations
(function(window) {
  'use strict';

  // Configurable Form Action URL and Entry IDs (can be overridden via window.BUDE_CONFIG)
  const DEFAULT_CONFIG = {
    // Hidden Google Form Endpoint
    formActionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_BUDE_MASTER_LOG/formResponse",
    
    // Entry Mapping
    entries: {
      name: "entry.1000001",
      subject: "entry.1000002",
      chapter: "entry.1000003",
      timeBudget: "entry.1000004",
      parentPhone: "entry.1000005",
      calibrationLevel: "entry.1000006",
      calibrationScore: "entry.1000007",
      testScore: "entry.1000008",
      confidenceScore: "entry.1000009",
      feedback: "entry.1000010"
    }
  };

  const config = Object.assign({}, DEFAULT_CONFIG, window.BUDE_CONFIG || {});

  /**
   * Dispatches data silently via Google Forms endpoint
   * Non-blocking, try/catch with console.warn on network or CORS rejection.
   */
  async function silentLog(payload) {
    try {
      console.log('[BUD-E Analytics] Preparing silent log entry:', payload);
      
      const formData = new FormData();
      
      if (payload.name && config.entries.name) formData.append(config.entries.name, payload.name);
      if (payload.subject && config.entries.subject) formData.append(config.entries.subject, payload.subject);
      if (payload.chapter && config.entries.chapter) formData.append(config.entries.chapter, payload.chapter);
      if (payload.timeBudget && config.entries.timeBudget) formData.append(config.entries.timeBudget, payload.timeBudget);
      if (payload.parentPhone && config.entries.parentPhone) formData.append(config.entries.parentPhone, payload.parentPhone);
      if (payload.calibrationLevel && config.entries.calibrationLevel) formData.append(config.entries.calibrationLevel, payload.calibrationLevel);
      if (payload.calibrationScore !== undefined && config.entries.calibrationScore) formData.append(config.entries.calibrationScore, String(payload.calibrationScore));
      if (payload.testScore !== undefined && config.entries.testScore) formData.append(config.entries.testScore, String(payload.testScore));
      if (payload.confidenceScore !== undefined && config.entries.confidenceScore) formData.append(config.entries.confidenceScore, String(payload.confidenceScore) + '%');
      if (payload.feedback && config.entries.feedback) formData.append(config.entries.feedback, payload.feedback);

      // Also append current timestamp
      formData.append('entry.timestamp', new Date().toISOString());

      // Local Storage Backup (Persistent local database on the student's/admin's browser)
      try {
        const storedLogs = JSON.parse(localStorage.getItem('bude_sprint_records') || '[]');
        storedLogs.push({
          timestamp: new Date().toISOString(),
          ...payload
        });
        localStorage.setItem('bude_sprint_records', JSON.stringify(storedLogs, null, 2));
      } catch (localErr) {
        console.warn('[BUD-E LocalStorage] Could not write to local storage:', localErr);
      }

      // Attempt silent POST with mode 'no-cors' so client UI never hangs
      if (config.formActionUrl && !config.formActionUrl.includes('EXAMPLE_FORM_ID')) {
        await fetch(config.formActionUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });
        console.log('[BUD-E Analytics] Silent log successfully transmitted to Google Forms.');
      } else {
        console.info('[BUD-E Analytics] Simulated log dispatch (Default endpoint configured):', payload);
      }
    } catch (err) {
      // Must not disrupt user experience
      console.warn('[BUD-E Analytics] Non-blocking log warning:', err.message);
    }
  }

  /**
   * Helper to retrieve all stored records from localStorage
   */
  function getLocalRecords() {
    try {
      return JSON.parse(localStorage.getItem('bude_sprint_records') || '[]');
    } catch (e) {
      return [];
    }
  }

  /**
   * Download all sprint records as a JSON or CSV file
   */
  function exportRecordsAsJSON() {
    const records = getLocalRecords();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(records, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `bude_records_${new Date().toISOString().slice(0,10)}.json`);
    dlAnchorElem.click();
  }

  window.BUDE_LOGGER = {
    silentLog,
    getLocalRecords,
    exportRecordsAsJSON,
    config
  };

})(window);
