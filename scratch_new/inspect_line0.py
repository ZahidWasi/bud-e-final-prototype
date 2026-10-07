import json

with open(r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.system_generated\logs\transcript_full.jsonl", "r", encoding="utf-8") as f:
    line0 = f.readline()
    data = json.loads(line0)
    print("Keys in line 0:", data.keys())
    for k in data:
        if k not in ["content", "thinking"]:
            print(f"Key {k}: {data[k]}")
    content = data.get("content", "")
    print("Length of content:", len(content))
    print("End of content:", repr(content[-500:]))
