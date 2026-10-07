import json
import re
import os

calib_file = r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.user_uploaded\media_1791302172518.txt"
notes_file = r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.user_uploaded\media_1791302172534.txt"
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

with open(calib_file, "r", encoding="utf-8", errors="ignore") as f:
    calib_raw = f.read()

# Replace escaped parens in calib_raw: "1\)" -> "1)"
calib_raw = calib_raw.replace(r"\)", ")")

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

positions.sort(key=lambda x: x[0])
for idx, (pos, header, name) in enumerate(positions):
    next_pos = positions[idx+1][0] if idx + 1 < len(positions) else len(calib_raw)
    subj_chunks[name] = calib_raw[pos + len(header):next_pos]

def parse_mcqs(text):
    questions = []
    # Split on question numbers: 1. or 1)
    raw_qs = re.split(r'(?:Questions?\s*)?(?:^|\n|\r)\s*(?:[1-9]|10)\s*[\.\)]\s*', text)
    if len(raw_qs) <= 1:
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
total_parsed = 0
for subj, chaps in CURRICULUM.items():
    calib_db[subj] = {}
    chunk = subj_chunks.get(subj, "")
    for idx, chap in enumerate(chaps):
        norm_chap = clean_str(chap)
        pattern = re.escape(norm_chap)
        m = re.search(rf"{pattern}\s*[-:]*", clean_str(chunk), re.IGNORECASE)
        if not m:
            first_word = norm_chap.split()[0]
            m = re.search(rf"{first_word}[^-\n]{{2,35}}\s*[-:]*", clean_str(chunk), re.IGNORECASE)
            
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
            total_parsed += len(qs)
            print(f"[CALIB] {subj} -> {chap}: {len(qs)} questions")
        else:
            print(f"[CALIB NOT FOUND] {subj} -> {chap}")
            calib_db[subj][chap] = []

print(f"Total calibration questions parsed: {total_parsed}")
with open(os.path.join(out_dir, "calibration.js"), "w", encoding="utf-8") as f:
    f.write(f"// BUD-E Calibration Questions Database\nconst CALIBRATION_QUESTIONS = {json.dumps(calib_db, indent=2)};\n")

print("Calibration database saved successfully!")
