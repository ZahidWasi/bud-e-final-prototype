import json

with open(r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.system_generated\logs\transcript_full.jsonl", "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        data = json.loads(line)
        content = data.get("content", "")
        print(f"Step {i}: type={data.get('type')}, role={data.get('source')}, len={len(content)}")
        if len(content) > 5000:
            print("  Preview:", repr(content[:100]))
            print("  End Preview:", repr(content[-100:]))
