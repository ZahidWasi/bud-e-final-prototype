// BUD-E YouTube Lecture Database
// Maps Subject -> Chapter -> Level (1, 2, 3) -> Duration (2, 3, 4, 5)

const YOUTUBE_DATABASE = {
  "Physics": {
    "Electric Charges and Fields": {
      "1": { "2": "https://youtu.be/WofOYYJs6LQ", "3": "https://youtu.be/P9xkGWyjpB8", "4": "https://youtu.be/P9xkGWyjpB8", "5": "https://youtu.be/i_yT6CpUOTk" },
      "2": { "2": "https://youtu.be/nDUpKE0pWJE", "3": "https://youtu.be/WofOYYJs6LQ", "4": "https://youtu.be/P9xkGWyjpB8", "5": "https://youtu.be/vvOxKA9dups" },
      "3": { "2": "https://youtu.be/f12YI80aCow", "3": "https://youtu.be/nDUpKE0pWJE", "4": "https://youtu.be/WofOYYJs6LQ", "5": "https://youtu.be/vvOxKA9dups" }
    },
    "Electrostatic Potential and Capacitance": {
      "1": { "2": "https://youtu.be/xW_JzCXD3dU", "3": "https://youtu.be/wAX4--rPYdU", "4": "https://youtu.be/wAX4--rPYdU", "5": "https://youtu.be/5Wj95zTraZI" },
      "2": { "2": "https://youtu.be/mXmj3SvINFk", "3": "https://youtu.be/wAX4--rPYdU", "4": "https://youtu.be/wAX4--rPYdU", "5": "https://youtu.be/nNhivhwHSRo" },
      "3": { "2": "https://youtu.be/mXmj3SvINFk", "3": "https://youtu.be/mXmj3SvINFk", "4": "https://youtu.be/xW_JzCXD3dU", "5": "https://youtu.be/nNhivhwHSRo" }
    },
    "Current Electricity": {
      "1": { "2": "https://youtu.be/YPwF-gAnQn8", "3": "https://youtu.be/7OiD5zYumhE", "4": "https://youtu.be/7OiD5zYumhE", "5": "https://youtu.be/ANz7YYAZzrM" },
      "2": { "2": "https://youtu.be/Xg9dXAUTd7A", "3": "https://youtu.be/YPwF-gAnQn8", "4": "https://youtu.be/7OiD5zYumhE", "5": "https://youtu.be/ANz7YYAZzrM" },
      "3": { "2": "https://youtu.be/Xg9dXAUTd7A", "3": "https://youtu.be/YPwF-gAnQn8", "4": "https://youtu.be/YPwF-gAnQn8", "5": "https://youtu.be/ANz7YYAZzrM" }
    },
    "Moving Charges and Magnetism": {
      "1": { "2": "https://youtu.be/X6-1FhkbFmg", "3": "https://youtu.be/X6-1FhkbFmg", "4": "https://youtu.be/v2HMyxWE-AQ", "5": "https://youtu.be/LSJIX_tSdPY" },
      "2": { "2": "https://youtu.be/zE5_w0xi9xE", "3": "https://youtu.be/X6-1FhkbFmg", "4": "https://youtu.be/X6-1FhkbFmg", "5": "https://youtu.be/LSJIX_tSdPY" },
      "3": { "2": "https://youtu.be/cC7K5fY3Tqk", "3": "https://youtu.be/zE5_w0xi9xE", "4": "https://youtu.be/X6-1FhkbFmg", "5": "https://youtu.be/LSJIX_tSdPY" }
    },
    "Magnetism and Matter": {
      "1": { "2": "https://youtu.be/B5Nm1NinWSs", "3": "https://youtu.be/MS6MtjQMWuU", "4": "https://youtu.be/MS6MtjQMWuU", "5": "https://youtu.be/JfJRMqx_YHE" },
      "2": { "2": "https://youtu.be/9VhcRTAH5_s", "3": "https://youtu.be/B5Nm1NinWSs", "4": "https://youtu.be/MS6MtjQMWuU", "5": "https://youtu.be/JfJRMqx_YHE" },
      "3": { "2": "https://youtu.be/9VhcRTAH5_s", "3": "https://youtu.be/9VhcRTAH5_s", "4": "https://youtu.be/B5Nm1NinWSs", "5": "https://youtu.be/JfJRMqx_YHE" }
    },
    "Electromagnetic Induction": {
      "1": { "2": "https://youtu.be/UtzTUGrNLWQ", "3": "https://youtu.be/aajMLIZqaz0", "4": "https://youtu.be/aTjbtdSDCj4", "5": "https://youtu.be/9OWhVAKzoig" },
      "2": { "2": "https://youtu.be/hLJxDX4CrJc", "3": "https://youtu.be/UtzTUGrNLWQ", "4": "https://youtu.be/aajMLIZqaz0", "5": "https://youtu.be/9OWhVAKzoig" },
      "3": { "2": "https://youtu.be/hLJxDX4CrJc", "3": "https://youtu.be/UtzTUGrNLWQ", "4": "https://youtu.be/aajMLIZqaz0", "5": "https://youtu.be/9OWhVAKzoig" }
    },
    "Alternating Current": {
      "1": { "2": "https://youtu.be/kznm-VuG4as", "3": "https://youtu.be/kznm-VuG4as", "4": "https://youtu.be/-5RqOFhPjkc", "5": "https://youtu.be/jZeRVBO0ymI" },
      "2": { "2": "https://youtu.be/dk2eOx5S8Tc", "3": "https://youtu.be/kznm-VuG4as", "4": "https://youtu.be/-5RqOFhPjkc", "5": "https://youtu.be/jZeRVBO0ymI" },
      "3": { "2": "https://youtu.be/dk2eOx5S8Tc", "3": "https://youtu.be/dk2eOx5S8Tc", "4": "https://youtu.be/kznm-VuG4as", "5": "https://youtu.be/jZeRVBO0ymI" }
    },
    "Electromagnetic Waves": {
      "1": { "2": "https://youtu.be/FyKwoMDYQjQ", "3": "https://youtu.be/mnB0XYcD6y4", "4": "https://youtu.be/mnB0XYcD6y4", "5": "https://youtu.be/mnB0XYcD6y4" },
      "2": { "2": "https://youtu.be/0usnal1wDew", "3": "https://youtu.be/FyKwoMDYQjQ", "4": "https://youtu.be/mnB0XYcD6y4", "5": "https://youtu.be/mnB0XYcD6y4" },
      "3": { "2": "https://youtu.be/0usnal1wDew", "3": "https://youtu.be/0usnal1wDew", "4": "https://youtu.be/FyKwoMDYQjQ", "5": "https://youtu.be/mnB0XYcD6y4" }
    },
    "Ray Optics and Optical Instruments": {
      "1": { "2": "https://youtu.be/_Jj3fbRJPjQ", "3": "https://youtu.be/_Jj3fbRJPjQ", "4": "https://youtu.be/_Jj3fbRJPjQ", "5": "https://youtu.be/aWZrNhD2S3k" },
      "2": { "2": "https://youtu.be/F1Ri66_1Se8", "3": "https://youtu.be/_Jj3fbRJPjQ", "4": "https://youtu.be/_Jj3fbRJPjQ", "5": "https://youtu.be/aWZrNhD2S3k" },
      "3": { "2": "https://youtu.be/F1Ri66_1Se8", "3": "https://youtu.be/F1Ri66_1Se8", "4": "https://youtu.be/_Jj3fbRJPjQ", "5": "https://youtu.be/aWZrNhD2S3k" }
    },
    "Wave Optics": {
      "1": { "2": "https://youtu.be/tHEndaIwkL4", "3": "https://youtu.be/tHEndaIwkL4", "4": "https://youtu.be/59qB0EAIiH0", "5": "https://youtu.be/yY6ChKn7thM" },
      "2": { "2": "https://youtu.be/goUfu2zcvLs", "3": "https://youtu.be/tHEndaIwkL4", "4": "https://youtu.be/tHEndaIwkL4", "5": "https://youtu.be/yY6ChKn7thM" },
      "3": { "2": "https://youtu.be/goUfu2zcvLs", "3": "https://youtu.be/goUfu2zcvLs", "4": "https://youtu.be/tHEndaIwkL4", "5": "https://youtu.be/yY6ChKn7thM" }
    },
    "Dual Nature of Radiation and Matter": {
      "1": { "2": "https://youtu.be/GwQ8FNV2Umw", "3": "https://youtu.be/PG9JYCLPCxA", "4": "https://youtu.be/5S6w4CTk_O8", "5": "https://youtu.be/OH0syg0zlBU" },
      "2": { "2": "https://youtu.be/0CiFQP2dNJk", "3": "https://youtu.be/PG9JYCLPCxA", "4": "https://youtu.be/5S6w4CTk_O8", "5": "https://youtu.be/OH0syg0zlBU" },
      "3": { "2": "https://youtu.be/0CiFQP2dNJk", "3": "https://youtu.be/0CiFQP2dNJk", "4": "https://youtu.be/PG9JYCLPCxA", "5": "https://youtu.be/OH0syg0zlBU" }
    },
    "Atoms": {
      "1": { "2": "https://youtu.be/EDsJpOIx4sU", "3": "https://youtu.be/jtx_7XD8y7s", "4": "https://youtu.be/jtx_7XD8y7s", "5": "https://youtu.be/gLmA8UP1YPU" },
      "2": { "2": "https://youtu.be/tRxnUA2xgAs", "3": "https://youtu.be/EDsJpOIx4sU", "4": "https://youtu.be/jtx_7XD8y7s", "5": "https://youtu.be/gLmA8UP1YPU" },
      "3": { "2": "https://youtu.be/tRxnUA2xgAs", "3": "https://youtu.be/EDsJpOIx4sU", "4": "https://youtu.be/EDsJpOIx4sU", "5": "https://youtu.be/gLmA8UP1YPU" }
    },
    "Nuclei": {
      "1": { "2": "https://youtu.be/I4Q5TUXVlxs", "3": "https://youtu.be/I4Q5TUXVlxs", "4": "https://youtu.be/7vzNElJDCmA", "5": "https://youtu.be/7vzNElJDCmA" },
      "2": { "2": "https://youtu.be/I4Q5TUXVlxs", "3": "https://youtu.be/I4Q5TUXVlxs", "4": "https://youtu.be/7vzNElJDCmA", "5": "https://youtu.be/7vzNElJDCmA" },
      "3": { "2": "https://youtu.be/UFlHL3497TM", "3": "https://youtu.be/I4Q5TUXVlxs", "4": "https://youtu.be/I4Q5TUXVlxs", "5": "https://youtu.be/7vzNElJDCmA" }
    },
    "Semiconductor Electronics: Materials, Devices and Simple Circuits": {
      "1": { "2": "https://youtu.be/gajlOYhUpBk", "3": "https://youtu.be/YGWiJ3xcxCA", "4": "https://youtu.be/YGWiJ3xcxCA", "5": "https://youtu.be/YGWiJ3xcxCA" },
      "2": { "2": "https://youtu.be/W3-xzKartaA", "3": "https://youtu.be/gajlOYhUpBk", "4": "https://youtu.be/YGWiJ3xcxCA", "5": "https://youtu.be/YGWiJ3xcxCA" },
      "3": { "2": "https://youtu.be/W3-xzKartaA", "3": "https://youtu.be/gajlOYhUpBk", "4": "https://youtu.be/gajlOYhUpBk", "5": "https://youtu.be/YGWiJ3xcxCA" }
    }
  },
  "Chemistry": {
    "Solutions": {
      "1": { "2": "https://youtu.be/wONsfq3rw1w", "3": "https://youtu.be/3M9NQ0fhzJQ", "4": "https://youtu.be/3M9NQ0fhzJQ", "5": "https://youtu.be/rAchBEU49SQ" },
      "2": { "2": "https://youtu.be/wONsfq3rw1w", "3": "https://youtu.be/wONsfq3rw1w", "4": "https://youtu.be/3M9NQ0fhzJQ", "5": "https://youtu.be/rAchBEU49SQ" },
      "3": { "2": "https://youtu.be/wONsfq3rw1w", "3": "https://youtu.be/wONsfq3rw1w", "4": "https://youtu.be/wONsfq3rw1w", "5": "https://youtu.be/rAchBEU49SQ" }
    },
    "Electrochemistry": {
      "1": { "2": "https://youtu.be/GuML-l3I7IQ", "3": "https://youtu.be/wuU2bZQVZNQ", "4": "https://youtu.be/wuU2bZQVZNQ", "5": "https://youtu.be/5A5dbVrEjgU" },
      "2": { "2": "https://youtu.be/GuML-l3I7IQ", "3": "https://youtu.be/GuML-l3I7IQ", "4": "https://youtu.be/wuU2bZQVZNQ", "5": "https://youtu.be/5A5dbVrEjgU" },
      "3": { "2": "https://youtu.be/GuML-l3I7IQ", "3": "https://youtu.be/GuML-l3I7IQ", "4": "https://youtu.be/GuML-l3I7IQ", "5": "https://youtu.be/5A5dbVrEjgU" }
    },
    "Chemical Kinetics": {
      "1": { "2": "https://youtu.be/Sag2IkxobkA", "3": "https://youtu.be/zCB43wAC-6o", "4": "https://youtu.be/zCB43wAC-6o", "5": "https://youtu.be/TJrnf7Woh9k" },
      "2": { "2": "https://youtu.be/Sag2IkxobkA", "3": "https://youtu.be/Sag2IkxobkA", "4": "https://youtu.be/zCB43wAC-6o", "5": "https://youtu.be/TJrnf7Woh9k" },
      "3": { "2": "https://youtu.be/Sag2IkxobkA", "3": "https://youtu.be/Sag2IkxobkA", "4": "https://youtu.be/Sag2IkxobkA", "5": "https://youtu.be/TJrnf7Woh9k" }
    },
    "The d- and f-Block Elements": {
      "1": { "2": "https://youtu.be/fv0gRU99c04", "3": "https://youtu.be/KG5t1LDP63U", "4": "https://youtu.be/KG5t1LDP63U", "5": "https://youtu.be/Dj2UQIqlETs" },
      "2": { "2": "https://youtu.be/fv0gRU99c04", "3": "https://youtu.be/KG5t1LDP63U", "4": "https://youtu.be/KG5t1LDP63U", "5": "https://youtu.be/Dj2UQIqlETs" },
      "3": { "2": "https://youtu.be/fv0gRU99c04", "3": "https://youtu.be/fv0gRU99c04", "4": "https://youtu.be/KG5t1LDP63U", "5": "https://youtu.be/Dj2UQIqlETs" }
    },
    "Coordination Compounds": {
      "1": { "2": "https://youtu.be/F7GkhROlZsw", "3": "https://youtu.be/Xpnsj_GT3z4", "4": "https://youtu.be/Xpnsj_GT3z4", "5": "https://youtu.be/7m-EuK4HyFo" },
      "2": { "2": "https://youtu.be/F7GkhROlZsw", "3": "https://youtu.be/F7GkhROlZsw", "4": "https://youtu.be/Xpnsj_GT3z4", "5": "https://youtu.be/7m-EuK4HyFo" },
      "3": { "2": "https://youtu.be/F7GkhROlZsw", "3": "https://youtu.be/F7GkhROlZsw", "4": "https://youtu.be/F7GkhROlZsw", "5": "https://youtu.be/7m-EuK4HyFo" }
    },
    "Haloalkanes and Haloarenes": {
      "1": { "2": "https://youtu.be/SUOBNBE-wBI", "3": "https://youtu.be/oi6yzZbV5wA", "4": "https://youtu.be/oi6yzZbV5wA", "5": "https://youtu.be/WHo2rNLDKUU" },
      "2": { "2": "https://youtu.be/SUOBNBE-wBI", "3": "https://youtu.be/SUOBNBE-wBI", "4": "https://youtu.be/oi6yzZbV5wA", "5": "https://youtu.be/WHo2rNLDKUU" },
      "3": { "2": "https://youtu.be/SUOBNBE-wBI", "3": "https://youtu.be/SUOBNBE-wBI", "4": "https://youtu.be/SUOBNBE-wBI", "5": "https://youtu.be/WHo2rNLDKUU" }
    },
    "Alcohols, Phenols and Ethers": {
      "1": { "2": "https://youtu.be/r8e5NTkQaw0", "3": "https://youtu.be/kFSBxUab1hg", "4": "https://youtu.be/kFSBxUab1hg", "5": "https://youtu.be/dN7-7GyTA9o" },
      "2": { "2": "https://youtu.be/xROlqZY8Kvk", "3": "https://youtu.be/r8e5NTkQaw0", "4": "https://youtu.be/kFSBxUab1hg", "5": "https://youtu.be/dN7-7GyTA9o" },
      "3": { "2": "https://youtu.be/xROlqZY8Kvk", "3": "https://youtu.be/xROlqZY8Kvk", "4": "https://youtu.be/r8e5NTkQaw0", "5": "https://youtu.be/dN7-7GyTA9o" }
    },
    "Aldehydes, Ketones and Carboxylic Acids": {
      "1": { "2": "https://youtu.be/ivf9km8xnAY", "3": "https://youtu.be/ivf9km8xnAY", "4": "https://youtu.be/UG32dzzJEds", "5": "https://youtu.be/tfM6-iEd6Ac" },
      "2": { "2": "https://youtu.be/ivf9km8xnAY", "3": "https://youtu.be/ivf9km8xnAY", "4": "https://youtu.be/UG32dzzJEds", "5": "https://youtu.be/tfM6-iEd6Ac" },
      "3": { "2": "https://youtu.be/ivf9km8xnAY", "3": "https://youtu.be/ivf9km8xnAY", "4": "https://youtu.be/ivf9km8xnAY", "5": "https://youtu.be/tfM6-iEd6Ac" }
    },
    "Amines": {
      "1": { "2": "https://youtu.be/SB__pn3_Jz4", "3": "https://youtu.be/Nv3D8-cQD_g", "4": "https://youtu.be/Nv3D8-cQD_g", "5": "https://youtu.be/wc0_IIyLqTc" },
      "2": { "2": "https://youtu.be/SB__pn3_Jz4", "3": "https://youtu.be/Nv3D8-cQD_g", "4": "https://youtu.be/Nv3D8-cQD_g", "5": "https://youtu.be/wc0_IIyLqTc" },
      "3": { "2": "https://youtu.be/SB__pn3_Jz4", "3": "https://youtu.be/SB__pn3_Jz4", "4": "https://youtu.be/Nv3D8-cQD_g", "5": "https://youtu.be/wc0_IIyLqTc" }
    },
    "Biomolecules": {
      "1": { "2": "https://youtu.be/APZOPf6xSZI", "3": "https://youtu.be/APZOPf6xSZI", "4": "https://youtu.be/APZOPf6xSZI", "5": "https://youtu.be/qew8jac0z7g" },
      "2": { "2": "https://youtu.be/udrCo3R9XaE", "3": "https://youtu.be/APZOPf6xSZI", "4": "https://youtu.be/APZOPf6xSZI", "5": "https://youtu.be/qew8jac0z7g" },
      "3": { "2": "https://youtu.be/udrCo3R9XaE", "3": "https://youtu.be/udrCo3R9XaE", "4": "https://youtu.be/APZOPf6xSZI", "5": "https://youtu.be/qew8jac0z7g" }
    }
  }
};

/**
 * Extracts YouTube Video ID from any standard or shortened URL
 */
function extractYoutubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

/**
 * Retrieves the embed URL for a given subject, chapter, student level, and time budget.
 * Returns null if unavailable.
 */
function getLectureVideoEmbed(subject, chapter, levelKey, durationHours) {
  // Normalize duration key (2, 3, 4, 5)
  const dKey = durationHours >= 5 ? "5" : String(durationHours);
  const lKey = String(levelKey);

  if (YOUTUBE_DATABASE[subject] && YOUTUBE_DATABASE[subject][chapter]) {
    const levelMap = YOUTUBE_DATABASE[subject][chapter][lKey];
    if (levelMap && levelMap[dKey]) {
      const rawUrl = levelMap[dKey];
      const videoId = extractYoutubeId(rawUrl);
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
      }
    }
  }
  return null;
}
