// BUD-E Practice and Test Question Bank Engine
// Generates targeted time-budgeted practice questions with hints, solutions, and difficulty tagging

const PRACTICE_BANK = {
  /**
   * Generates or fetches practice questions for a given subject, chapter, level, and time duration.
   * Target counts:
   * Level 1 (Beginner): 2h=20, 3h=28, 4h=35, 5+h=45
   * Level 2 (Intermediate): 2h=20, 3h=26, 4h=30, 5+h=40
   * Level 3 (Advanced): 2h=15, 3h=25, 4h=30, 5+h=35
   */
  getPracticeQuestions(subject, chapter, level, durationHours) {
    const targetCount = this.getRequiredPracticeCount(level, durationHours);
    const baseQuestions = (typeof CALIBRATION_QUESTIONS !== "undefined" && CALIBRATION_QUESTIONS[subject] && CALIBRATION_QUESTIONS[subject][chapter]) 
      ? CALIBRATION_QUESTIONS[subject][chapter] 
      : [];

    const notesData = (typeof SHORT_NOTES_DATABASE !== "undefined" && SHORT_NOTES_DATABASE[subject] && SHORT_NOTES_DATABASE[subject][chapter])
      ? SHORT_NOTES_DATABASE[subject][chapter]
      : null;

    const list = [];

    // First, incorporate base questions with enriched hints & solutions
    baseQuestions.forEach((bq, idx) => {
      list.push({
        id: `pq_base_${idx + 1}`,
        question: bq.question,
        options: [...bq.options],
        answer: bq.answer,
        answerLetter: bq.answerLetter || ["A", "B", "C", "D"][bq.answer],
        hint: this.generateHint(bq, chapter),
        solution: this.generateSolution(bq, chapter),
        difficulty: (idx < 4) ? "beginner" : (idx < 8 ? "intermediate" : "advanced")
      });
    });

    // If more questions are required, synthesize high-yield board-pattern questions using flashcards and key notes
    if (list.length < targetCount) {
      const flashcards = notesData && notesData.flashcards ? notesData.flashcards : [];
      let cardIdx = 0;
      let counter = list.length + 1;

      while (list.length < targetCount) {
        if (flashcards.length > 0 && cardIdx < flashcards.length) {
          const card = flashcards[cardIdx % flashcards.length];
          const synthQ = this.createQuestionFromFlashcard(card, chapter, counter, level);
          list.push(synthQ);
          cardIdx++;
        } else {
          // Additional concept synthesis
          list.push(this.createFallbackConceptQuestion(chapter, counter, level));
        }
        counter++;
      }
    }

    // Filter/slice to exact required count
    return list.slice(0, targetCount);
  },

  /**
   * Retrieves 10 moderate-to-difficult test questions for Stage 4 (Test)
   */
  getTestQuestions(subject, chapter) {
    const base = this.getPracticeQuestions(subject, chapter, 2, 2);
    // Take moderate to difficult questions (index 3 to 13, or sample 10)
    const testList = [];
    for (let i = 0; i < Math.min(10, base.length); i++) {
      const q = base[(i + 3) % base.length];
      testList.push({
        ...q,
        id: `tq_${i + 1}`
      });
    }
    return testList;
  },

  getRequiredPracticeCount(level, durationHours) {
    const lvl = Number(level);
    const hrs = Number(durationHours);

    if (lvl === 1) { // Beginner
      if (hrs <= 2) return 20;
      if (hrs === 3) return 28;
      if (hrs === 4) return 35;
      return 45;
    } else if (lvl === 2) { // Intermediate
      if (hrs <= 2) return 20;
      if (hrs === 3) return 26;
      if (hrs === 4) return 30;
      return 40;
    } else { // Advanced
      if (hrs <= 2) return 15;
      if (hrs === 3) return 25;
      if (hrs === 4) return 30;
      return 35;
    }
  },

  generateHint(q, chapter) {
    // Generate an intelligent hint based on question phrasing
    const text = q.question.toLowerCase();
    if (text.includes("si unit")) return "Recall the standard SI dimensions and base units derived from definition.";
    if (text.includes("proportional") || text.includes("inversely")) return "Think about the governing mathematical formula and the power of the variable.";
    if (text.includes("conservation")) return "Recall whether energy, charge, or momentum is conserved in this physical phenomenon.";
    if (text.includes("maximum") || text.includes("minimum")) return "Evaluate the trigonometric factor (sin θ or cos θ) at 0°, 90°, or 180°.";
    if (text.includes("reaction") || text.includes("reagent")) return "Check the functional group transformation and the specific conditions required.";
    return `Focus on the core principle of ${chapter} and eliminate choices that violate basic boundary conditions.`;
  },

  generateSolution(q, chapter) {
    const correctLetter = q.answerLetter || ["A", "B", "C", "D"][q.answer];
    const correctText = q.options && q.options[q.answer] ? q.options[q.answer] : "";
    return `Correct Option is (${correctLetter}): ${correctText}. According to the standard NCERT curriculum for ${chapter}, this relationship holds directly from the governing law and standard analytical definitions.`;
  },

  createQuestionFromFlashcard(card, chapter, index, level) {
    const questionText = `Regarding ${chapter}: What is the correct definition or formula for "${card.front}"?`;
    const correctOpt = card.back;
    const dummyOptions = [
      correctOpt,
      `It is inversely related to the square of ${card.front.toLowerCase()}`,
      `It remains constant and zero under all standard state conditions`,
      `It depends strictly on external boundary potential without intrinsic dependence`
    ];
    // Shuffle options so correct is not always first
    const shuffled = [...dummyOptions].sort(() => 0.5 - Math.random());
    const correctIdx = shuffled.indexOf(correctOpt);

    return {
      id: `pq_synth_${index}`,
      question: questionText,
      options: shuffled,
      answer: correctIdx,
      answerLetter: ["A", "B", "C", "D"][correctIdx],
      hint: `Recall the high-yield flashcard: ${card.front.substring(0, 30)}...`,
      solution: `Option (${["A", "B", "C", "D"][correctIdx]}) is correct because ${card.front} corresponds to: ${card.back}.`,
      difficulty: level === 3 ? "advanced" : (level === 2 ? "intermediate" : "beginner")
    };
  },

  createFallbackConceptQuestion(chapter, index, level) {
    return {
      id: `pq_fall_${index}`,
      question: `In Class 12 Board examinations, which of the following is considered an essential rule when solving problems in "${chapter}"?`,
      options: [
        "State the fundamental formula, substitute given values with correct units, and verify sign conventions",
        "Skip intermediate steps to write only final values without dimensions",
        "Assume variables are independent of temperature and physical dimensions",
        "Disregard vector directions when computing scalar and vector products"
      ],
      answer: 0,
      answerLetter: "A",
      hint: "Remember CBSE step-marking guidelines for exam numericals and derivations.",
      solution: "Option (A) is correct. Step marking in Board exams strictly rewards stating the base formula, clean substitution with standard units, and systematic computation.",
      difficulty: "intermediate"
    };
  }
};
