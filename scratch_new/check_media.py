import os

media_files = [
    r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.user_uploaded\media_1791302140320.txt",
    r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.user_uploaded\media_1791302172534.txt",
    r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.user_uploaded\media_1791302172518.txt"
]

for p in media_files:
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8", errors="ignore") as f:
            preview = f.read(300)
            f.seek(0, 2)
            size = f.tell()
            print(f"File: {os.path.basename(p)}, Size: {size} bytes\n  Preview: {repr(preview[:150])}\n")
    else:
        print(f"File {p} does not exist!")
