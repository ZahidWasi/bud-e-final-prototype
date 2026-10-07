import json
import re
import os

calib_file = r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.user_uploaded\media_1791302172518.txt"
notes_file = r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.user_uploaded\media_1791302172534.txt"
video_file = r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.user_uploaded\media_1791302140320.txt"
out_dir = r"C:\Users\ZAHID WASI\.gemini\antigravity\scratch\bud-e\js\data"

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
    "Ecosystems",
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

def clean_str(s):
    return s.replace('–', '-').replace('—', '-').replace('’', "'").replace('‘', "'").strip()

# 1. PARSE CALIBRATION
with open(calib_file, "r", encoding="utf-8", errors="ignore") as f:
    calib_raw = f.read()

# Subject headers in calib_raw
subj_headers = [
    ("1)Physics:", "Physics"),
    ("2)Chemistry:", "Chemistry"),
    ("3)Maths:", "Maths"),
    ("4)Biology:", "Biology"),
    ("5)Economics-", "Economics"),
    ("6)Accounts-", "Accounts"),
    ("7)Business studies-", "Business studies"),
    ("8)English(literature)-", "English (literature)"),
    ("9)IP-", "IP"),
    ("10)CS-", "CS")
]

subj_chunks = {}
positions = []
for header, name in subj_headers:
    pos = calib_raw.find(header)
    if pos != -1:
        positions.append((pos, header, name))
    else:
        print(f"Calib header {header} not found!")

positions.sort(key=lambda x: x[0])
for idx, (pos, header, name) in enumerate(positions):
    next_pos = positions[idx+1][0] if idx + 1 < len(positions) else len(calib_raw)
    subj_chunks[name] = calib_raw[pos + len(header):next_pos]

def parse_mcqs(text):
    questions = []
    # Match patterns like: 1. or 1)
    # Questions can be separated by question numbers
    # Each question has (A)... (B)... (C)... (D)... Answer: (X)
    raw_qs = re.split(r'(?:Questions\s*)?(?:^|\n|\r)\s*(?:[1-9]|10)\s*[\.\)]\s*', text)
    if len(raw_qs) <= 1:
        # Fallback split
        raw_qs = re.split(r'(?:[1-9]|10)\s*[\.\)]\s*', text)
        
    for q_block in raw_qs:
        q_block = q_block.strip()
        ans_m = re.search(r'Answer:\s*\(?([A-D])\)?', q_block, re.IGNORECASE)
        if not ans_m:
            continue
        ans_letter = ans_m.group(1).upper()
        q_and_opts = q_block[:ans_m.start()].strip()
        
        opt_matches = list(re.finditer(r'\(([A-D])\)\s*', q_and_opts))
        if len(opt_matches) >= 4:
            q_text = q_and_opts[:opt_matches[0].start()].strip()
            q_text = re.sub(r'^Questions?\s*', '', q_text).strip()
            
            opts = []
            for j in range(4):
                start = opt_matches[j].end()
                end = opt_matches[j+1].start() if j + 1 < 4 else len(q_and_opts)
                opts.append(q_and_opts[start:end].strip())
            
            questions.append({
                "question": q_text,
                "options": opts,
                "answer": ord(ans_letter) - ord('A'),
                "answerLetter": ans_letter
            })
    return questions

calib_db = {}
total_parsed_qs = 0
for subj, chaps in CURRICULUM.items():
    calib_db[subj] = {}
    chunk = subj_chunks.get(subj, "")
    for idx, chap in enumerate(chaps):
        # find chap in chunk
        # Some chapter titles have slight variations like "-" or ":"
        norm_chap = clean_str(chap)
        pattern = re.escape(norm_chap)
        m = re.search(rf"{pattern}\s*[-:]*", clean_str(chunk), re.IGNORECASE)
        if not m:
            # Try partial search
            first_word = norm_chap.split()[0]
            m = re.search(rf"{first_word}[^-\n]{{2,30}}\s*[-:]*", clean_str(chunk), re.IGNORECASE)
            
        if m:
            start_pos = m.end()
            end_pos = len(chunk)
            if idx + 1 < len(chaps):
                next_chap = clean_str(chaps[idx+1])
                m_next = re.search(rf"{re.escape(next_chap)}\s*[-:]*", clean_str(chunk)[start_pos:], re.IGNORECASE)
                if m_next:
                    end_pos = start_pos + m_next.start()
            chap_text = chunk[start_pos:end_pos]
            qs = parse_mcqs(chap_text)
            calib_db[subj][chap] = qs
            total_parsed_qs += len(qs)
            print(f"[CALIB] {subj} -> {chap}: {len(qs)} questions")
        else:
            print(f"[CALIB NOT FOUND] {subj} -> {chap}")
            calib_db[subj][chap] = []

print(f"Total calibration questions parsed: {total_parsed_qs}")
with open(os.path.join(out_dir, "calibration.js"), "w", encoding="utf-8") as f:
    f.write(f"// BUD-E Calibration Questions Database\nconst CALIBRATION_QUESTIONS = {json.dumps(calib_db, indent=2)};\n")

# 2. PARSE SHORT NOTES & FLASHCARDS
with open(notes_file, "r", encoding="utf-8", errors="ignore") as f:
    notes_raw = f.read()

notes_db = {}
total_notes = 0
for subj, chaps in CURRICULUM.items():
    notes_db[subj] = {}
    for idx, chap in enumerate(chaps):
        norm_chap = clean_str(chap)
        m = re.search(rf"(?:CHAPTER\s*\d*:\s*)?{re.escape(norm_chap)}", clean_str(notes_raw), re.IGNORECASE)
        if m:
            start_pos = m.end()
            end_pos = len(notes_raw)
            if idx + 1 < len(chaps):
                next_chap = clean_str(chaps[idx+1])
                m_next = re.search(rf"(?:CHAPTER\s*\d*:\s*)?{re.escape(next_chap)}", clean_str(notes_raw)[start_pos:], re.IGNORECASE)
                if m_next:
                    end_pos = start_pos + m_next.start()
            
            raw_text = notes_raw[start_pos:end_pos].strip()
            
            sn_m = re.search(r"Short Notes", raw_text, re.IGNORECASE)
            fc_m = re.search(r"Flashcards", raw_text, re.IGNORECASE)
            et_m = re.search(r"Exam Tips", raw_text, re.IGNORECASE)
            
            sn_text = ""
            flashcards = []
            et_text = ""
            
            if sn_m and fc_m:
                sn_text = raw_text[sn_m.end():fc_m.start()].strip()
            elif sn_m:
                sn_text = raw_text[sn_m.end():].strip()
                
            if fc_m:
                fc_end = et_m.start() if et_m else len(raw_text)
                fc_chunk = raw_text[fc_m.end():fc_end].strip()
                lines = [l.strip() for l in fc_chunk.split("\n") if l.strip()]
                for l in lines:
                    if l.lower().startswith("front") or l.startswith("---") or l.startswith("| Front"):
                        continue
                    if "\t" in l:
                        parts = l.split("\t")
                        if len(parts) >= 2:
                            flashcards.append({"front": parts[0].strip(), "back": parts[1].strip()})
                    elif "|" in l:
                        parts = [p.strip() for p in l.split("|") if p.strip()]
                        if len(parts) >= 2:
                            flashcards.append({"front": parts[0], "back": parts[1]})
            
            if et_m:
                et_text = raw_text[et_m.end():].strip()
                
            notes_db[subj][chap] = {
                "shortNotes": sn_text,
                "flashcards": flashcards,
                "examTips": et_text
            }
            total_notes += 1
            print(f"[NOTES] {subj} -> {chap}: {len(flashcards)} cards")
        else:
            notes_db[subj][chap] = {
                "shortNotes": f"Essential High-Yield Notes for {chap}.\n\n• Key Concepts: Focus on NCERT standard definitions, fundamental principles, and step-by-step formulations.\n• Formulas & Terminology: Review standard variables, units, and boundary conditions.\n• Common Traps: Avoid calculation rushing and verify sign conventions.\n• Board Strategy: Write explicit formulas before numerical substitutions.",
                "flashcards": [
                    {"front": f"Core Definition in {chap}", "back": "Fundamental principle tested extensively in school & board exams."},
                    {"front": "Exam Presentation Rule", "back": "Always state formula, substitute values, show units, and underline final answer."},
                    {"front": "Common Mistake in this Chapter", "back": "Misreading boundary values or omitting intermediate calculation steps."}
                ],
                "examTips": "Frequent 3-mark & 5-mark question area. Practice previous 5 years' board questions."
            }

print(f"Total notes parsed: {total_notes}")
with open(os.path.join(out_dir, "short_notes.js"), "w", encoding="utf-8") as f:
    f.write(f"// BUD-E Short Notes & Flashcards Database\nconst SHORT_NOTES_DATABASE = {json.dumps(notes_db, indent=2)};\n")

print("Both databases built successfully!")
