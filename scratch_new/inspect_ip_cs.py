with open(r"C:\Users\ZAHID WASI\.gemini\antigravity\brain\d1122b88-5f7e-4c50-bd6e-7cab083dd61e\.user_uploaded\media_1791302172518.txt", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

pos_ip = text.find("9)IP-")
pos_cs = text.find("10)CS-")

print("IP snippet (first 1000 chars):")
print(text[pos_ip:pos_ip+1000])

print("\nCS snippet (first 1000 chars):")
print(text[pos_cs:pos_cs+1000])
