import re
import json

def parse_videos():
    filepath = 'C:/Users/ZAHID WASI/.gemini/antigravity/brain/581c3b0e-0f90-4cdc-b3d2-eca95a2bcd8f/.user_uploaded/media_1791393121591.txt'
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        text = f.read()

    # Subjects in the file
    subject_pattern = re.compile(r'^\d+\)\s*([A-Za-z\s\(\)]+):', re.MULTILINE)
    
    # We will parse line by line
    lines = text.split('\n')
    current_subject = "Physics"
    current_chapter = None
    current_level = None
    
    videos = {}
    
    for line in lines:
        l = line.strip()
        if not l:
            continue
            
        subj_match = re.match(r'^\d+\)\s*([A-Za-z\s\(\)]+):', l)
        if subj_match:
            s_name = subj_match.group(1).strip()
            # Normalize subject name
            if "Physics" in s_name: current_subject = "Physics"
            elif "Chemistry" in s_name: current_subject = "Chemistry"
            elif "Math" in s_name: current_subject = "Maths"
            elif "Bio" in s_name: current_subject = "Biology"
            elif "Econ" in s_name: current_subject = "Economics"
            elif "Account" in s_name: current_subject = "Accounts"
            elif "Business" in s_name: current_subject = "Business studies"
            elif "English" in s_name: current_subject = "English (literature)"
            elif "IP" in s_name: current_subject = "IP"
            elif "CS" in s_name: current_subject = "CS"
            else: current_subject = s_name
            if current_subject not in videos:
                videos[current_subject] = {}
            current_chapter = None
            continue
            
        if current_subject not in videos:
            videos[current_subject] = {}
            
        # Check level
        level_match = re.match(r'^Level\s*(\d+)\s*\(([^)]+)\)', l, re.IGNORECASE)
        if level_match:
            num = level_match.group(1)
            name = level_match.group(2).strip().lower()
            if "beginner" in name or num == "1":
                current_level = "Foundation"
            elif "intermediate" in name or num == "2":
                current_level = "Intermediate"
            elif "advanced" in name or num == "3":
                current_level = "Advanced"
            continue
            
        # Check time duration and URL
        # e.g.: &#x20;  For time duration 2 hours-https://youtu.be/WofOYYJs6LQ
        time_match = re.search(r'For time duration\s*(2\s*hours|3\s*hours|4\s*hours|5\+\s*hours)-(.*)', l, re.IGNORECASE)
        if time_match:
            duration = time_match.group(1).replace(" ", "").lower() # 2hours, 3hours, 4hours, 5+hours
            raw_url = time_match.group(2).strip()
            # Clean URL: could have \_ or extra characters
            cleaned_url = raw_url.replace(r'\_', '_').strip()
            
            # YouTube ID extraction
            yt_id = ""
            if "youtu.be/" in cleaned_url:
                yt_id = cleaned_url.split("youtu.be/")[1].split("?")[0].split("&")[0]
            elif "watch?v=" in cleaned_url:
                yt_id = cleaned_url.split("watch?v=")[1].split("&")[0]
                
            if current_chapter and current_level:
                if current_chapter not in videos[current_subject]:
                    videos[current_subject][current_chapter] = {}
                if current_level not in videos[current_subject][current_chapter]:
                    videos[current_subject][current_chapter][current_level] = {}
                videos[current_subject][current_chapter][current_level][duration] = {
                    "url": cleaned_url,
                    "youtubeId": yt_id
                }
            continue
            
        # Check if line is chapter header
        # Ends with '-' or is a known chapter name
        if l.endswith('-') and not l.startswith('Level') and not 'time duration' in l:
            chap_name = l.rstrip('-').strip()
            current_chapter = chap_name
            if current_chapter not in videos[current_subject]:
                videos[current_subject][current_chapter] = {}

    out_file = 'C:/Users/ZAHID WASI/.gemini/antigravity/scratch/js/data/videos.js'
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write('// YouTube Video Registry parsed from specifications\n')
        f.write('window.BUDE_VIDEOS = ' + json.dumps(videos, indent=2) + ';\n')
        
    print(f"Parsed videos for {len(videos)} subjects. Saved to {out_file}.")

if __name__ == '__main__':
    parse_videos()
