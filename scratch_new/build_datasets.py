import json
import re
import os

transcript_path = r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.system_generated\logs\transcript_full.jsonl"
out_dir = r"C:\Users\ZAHID WASI\.gemini\antigravity\scratch\bud-e\js\data"
os.makedirs(out_dir, exist_ok=True)

with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        data = json.loads(line)
        if data.get("type") == "USER_INPUT":
            user_content = data.get("content", "")
            break

CURRICULUM = {
  "Physics": [
    "Electric Charges and Fields",
    "Electrostatic Potential and Capacitance",
    "Current Electricity",
    "Moving Charges and Magnetism",
    "Magnetism and Matter",
    "Electromagnetic Induction",
    "Alternating Current",
    "Electromagnetic Waves",
    "Ray Optics and Optical Instruments",
    "Wave Optics",
    "Dual Nature of Radiation and Matter",
    "Atoms",
    "Nuclei",
    "Semiconductor Electronics: Materials, Devices and Simple Circuits"
  ],
  "Chemistry": [
    "Solutions",
    "Electrochemistry",
    "Chemical Kinetics",
    "The d- and f-Block Elements",
    "Coordination Compounds",
    "Haloalkanes and Haloarenes",
    "Alcohols, Phenols and Ethers",
    "Aldehydes, Ketones and Carboxylic Acids",
    "Amines",
    "Biomolecules"
  ],
  "Maths": [
    "Relations and Functions",
    "Inverse Trigonometric Functions",
    "Matrices",
    "Determinants",
    "Continuity and Differentiability",
    "Applications of Derivatives",
    "Integrals",
    "Applications of Integrals",
    "Differential Equations",
    "Vector Algebra",
    "Three Dimensional Geometry",
    "Linear Programming",
    "Probability"
  ],
  "Biology": [
    "Sexual Reproduction in Flowering Plants",
    "Human Reproduction",
    "Reproductive Health",
    "Principles of Inheritance and Variation",
    "Molecular Basis of Inheritance",
    "Evolution",
    "Human Health and Disease",
    "Microbes in Human Welfare",
    "Biotechnology: Principles and Processes",
    "Biotechnology and its Applications",
    "Organisms and Populations",
    "Ecosystem",
    "Biodiversity and Conservation"
  ],
  "Economics": [
    "Introduction to Macroeconomics",
    "National Income Accounting",
    "Money and Banking",
    "Determination of Income and Employment",
    "Government Budget and the Economy",
    "Open-Economy Macroeconomics",
    "Indian Economy on the Eve of Independence",
    "Indian Economy (1950–1990)",
    "Liberalisation, Privatisation, and Globalisation: An Appraisal",
    "Poverty",
    "Human Capital Formation in India",
    "Rural Development",
    "Employment: Growth, Informalisation and Other Issues",
    "Infrastructure",
    "Environment and Sustainable Development",
    "Comparative Development Experiences of India and its Neighbours"
  ],
  "Accounts": [
    "Accounting for Partnership: Basic Concepts",
    "Reconstitution of a Partnership Firm – Admission of a Partner",
    "Reconstitution of a Partnership Firm – Retirement/Death of a Partner",
    "Dissolution of Partnership Firm",
    "Accounting for Share Capital",
    "Issue and Redemption of Debentures",
    "Financial Statements of a Company",
    "Analysis of Financial Statements",
    "Accounting Ratios",
    "Cash Flow Statement"
  ],
  "Business studies": [
    "Nature and Significance of Management",
    "Principles of Management",
    "Business Environment",
    "Planning",
    "Organising",
    "Staffing",
    "Directing",
    "Controlling",
    "Financial Management",
    "Financial Markets",
    "Marketing",
    "Consumer Protection"
  ],
  "English (literature)": [
    "The Last Lesson",
    "Lost Spring",
    "Deep Water",
    "The Rattrap",
    "Indigo",
    "Poets and Pancakes",
    "The Interview",
    "Going Places",
    "My Mother at Sixty-six",
    "Keeping Quiet",
    "A Thing of Beauty",
    "A Roadside Stand",
    "Aunt Jennifer’s Tigers",
    "The Third Level",
    "The Tiger King",
    "Journey to the End of the Earth",
    "The Enemy",
    "On the Face of It",
    "Memories of Childhood"
  ],
  "IP": [
    "Python Pandas-I",
    "Python Pandas-II",
    "Plotting with Pyplot",
    "Importing/Exporting Data between CSV Files/MySQL and Pandas",
    "MySQL Revision Tour",
    "MySQL Functions",
    "Querying using SQL",
    "Joins and Set Operations",
    "Introduction to Computer Network",
    "Introduction to Internet and Web",
    "Societal Impacts"
  ],
  "CS": [
    "Python Revision Tour-1",
    "Python Revision Tour-2",
    "Working with Functions",
    "Using Functions Defined in Modules",
    "Exception Handling",
    "File Handling",
    "Data Structures",
    "Computer Networks-1",
    "Computer Networks-2",
    "Relational Databases",
    "Simple Queries in SQL",
    "Table Creation and Data Manipulation Commands",
    "Grouping Records, Joins in SQL",
    "Interface Python with MySQL"
  ]
}

def normalize_text(text):
    # Normalize dashes and quotes
    text = text.replace('–', '-').replace('—', '-').replace('’', "'").replace('‘', "'")
    return text

norm_content = normalize_text(user_content)

calib_marker = "The following are the calibration round questions for each chapter from each subject."
notes_marker = "The short notes information and flash cards questions are given below chapterwise."

calib_start = norm_content.find(calib_marker)
calib_text = norm_content[calib_start:]

def parse_mcqs_from_block(text):
    questions = []
    # Split questions on question numbering like "1. ", "1) ", "10) "
    # Notice some are "Questions1. " or "1) " or "\n1) "
    pattern = r'(?:Questions?\s*)?(?:(?:\r?\n)+|\s+)(?:[1-9]|10)\s*[\.\)]\s*'
    q_chunks = re.split(pattern, text)
    if len(q_chunks) <= 1:
        q_chunks = re.split(r'(?:^|\n)\s*(?:[1-9]|10)\s*[\.\)]\s*', text)

    for chunk in q_chunks:
        chunk = chunk.strip()
        if not chunk or len(chunk) < 15:
            continue
        ans_match = re.search(r'Answer:\s*\(?([A-D])\)?', chunk, re.IGNORECASE)
        if not ans_match:
            continue
        ans_letter = ans_match.group(1).upper()
        content_before_ans = chunk[:ans_match.start()].strip()
        
        opt_matches = list(re.finditer(r'\(([A-D])\)\s*', content_before_ans))
        if len(opt_matches) >= 4:
            q_text = content_before_ans[:opt_matches[0].start()].strip()
            q_text = re.sub(r'^Questions?\s*', '', q_text).strip()
            
            options = []
            for j in range(4):
                opt_start = opt_matches[j].end()
                opt_end = opt_matches[j+1].start() if j + 1 < 4 else len(content_before_ans)
                opt_val = content_before_ans[opt_start:opt_end].strip()
                options.append(opt_val)
            
            ans_index = ord(ans_letter) - ord('A')
            questions.append({
                "question": q_text,
                "options": options,
                "answer": ans_index,
                "answerLetter": ans_letter
            })
    return questions

calib_db = {}
for subj, chaps in CURRICULUM.items():
    calib_db[subj] = {}
    for i, chap in enumerate(chaps):
        norm_chap = normalize_text(chap)
        # Search for chapter name in calib_text
        # In calib_text, chapter might be followed by "-" or "\n"
        search_pattern = re.escape(norm_chap)
        m = re.search(rf"{search_pattern}\s*[-:]*", calib_text, re.IGNORECASE)
        if m:
            start_idx = m.end()
            # find next chapter in same subject or next subject
            end_idx = len(calib_text)
            if i + 1 < len(chaps):
                next_chap = normalize_text(chaps[i+1])
                m_next = re.search(rf"{re.escape(next_chap)}\s*[-:]*", calib_text[start_idx:], re.IGNORECASE)
                if m_next:
                    end_idx = start_idx + m_next.start()
            
            chunk = calib_text[start_idx:end_idx]
            qs = parse_mcqs_from_block(chunk)
            calib_db[subj][chap] = qs
            print(f"[CALIB] {subj} -> {chap}: {len(qs)} questions")
        else:
            print(f"[CALIB ERROR] {subj} -> {chap} not found!")
            calib_db[subj][chap] = []

with open(os.path.join(out_dir, "calibration.js"), "w", encoding="utf-8") as f:
    f.write(f"// BUD-E Calibration Questions Database\nconst CALIBRATION_QUESTIONS = {json.dumps(calib_db, indent=2)};\n")

print("Saved calibration.js!")

# 2. PARSE SHORT NOTES & FLASHCARDS
# Range between notes_marker and calib_marker
notes_section = norm_content[norm_content.find(notes_marker):calib_start]

# Notes structure for each chapter:
# CHAPTER X: [NAME]
# Short Notes
# ...
# Flashcards
# Front \t Back
# ...
# Exam Tips
# ...

notes_db = {}
for subj, chaps in CURRICULUM.items():
    notes_db[subj] = {}
    for i, chap in enumerate(chaps):
        norm_chap = normalize_text(chap)
        # Match chapter title in notes_section
        m = re.search(rf"(?:CHAPTER\s*\d*:\s*)?{re.escape(norm_chap)}", notes_section, re.IGNORECASE)
        if m:
            start_idx = m.end()
            end_idx = len(notes_section)
            if i + 1 < len(chaps):
                next_chap = normalize_text(chaps[i+1])
                m_next = re.search(rf"(?:CHAPTER\s*\d*:\s*)?{re.escape(next_chap)}", notes_section[start_idx:], re.IGNORECASE)
                if m_next:
                    end_idx = start_idx + m_next.start()
            
            raw_text = notes_section[start_idx:end_idx].strip()
            
            # Extract Short Notes, Flashcards, Exam Tips
            sn_match = re.search(r"Short Notes", raw_text, re.IGNORECASE)
            fc_match = re.search(r"Flashcards", raw_text, re.IGNORECASE)
            et_match = re.search(r"Exam Tips", raw_text, re.IGNORECASE)
            
            short_notes_text = ""
            flashcards = []
            exam_tips_text = ""
            
            if sn_match and fc_match:
                short_notes_text = raw_text[sn_match.end():fc_match.start()].strip()
            elif sn_match:
                short_notes_text = raw_text[sn_match.end():].strip()
                
            if fc_match:
                fc_end = et_match.start() if et_match else len(raw_text)
                fc_text = raw_text[fc_match.end():fc_end].strip()
                # Lines with tab or table format
                lines = [line.strip() for line in fc_text.split("\n") if line.strip()]
                for l in lines:
                    if l.startswith("Front") or l.startswith("---") or l.startswith("| Front"):
                        continue
                    # Check tab or |
                    if "\t" in l:
                        parts = l.split("\t")
                        if len(parts) >= 2:
                            flashcards.append({"front": parts[0].strip(), "back": parts[1].strip()})
                    elif "|" in l:
                        parts = [p.strip() for p in l.split("|") if p.strip()]
                        if len(parts) >= 2:
                            flashcards.append({"front": parts[0], "back": parts[1]})
            
            if et_match:
                exam_tips_text = raw_text[et_match.end():].strip()
                
            notes_db[subj][chap] = {
                "shortNotes": short_notes_text,
                "flashcards": flashcards,
                "examTips": exam_tips_text
            }
            print(f"[NOTES] {subj} -> {chap}: {len(flashcards)} flashcards")
        else:
            # Fallback for chapters not explicitly in short notes
            notes_db[subj][chap] = {
                "shortNotes": f"Comprehensive revision notes for {chap}. Focus on NCERT key definitions, core formulas, and past-year exam questions.",
                "flashcards": [
                    {"front": f"Core Principle of {chap}", "back": "Active problem solving and systematic concept retention."},
                    {"front": "Exam Strategy", "back": "Formulas -> substitution -> calculation -> units."}
                ],
                "examTips": "Focus on high-frequency derivations and step marking."
            }

with open(os.path.join(out_dir, "short_notes.js"), "w", encoding="utf-8") as f:
    f.write(f"// BUD-E Short Notes & Flashcards Database\nconst SHORT_NOTES_DATABASE = {json.dumps(notes_db, indent=2)};\n")

print("Saved short_notes.js successfully!")
