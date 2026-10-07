"""
BUD-E Web Application Server
Serves static files and appends sprint logs in human-readable format to sprint_records.txt
"""

import http.server
import socketserver
import json
import os
import datetime

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
LOG_FILE = os.path.join(DIRECTORY, "sprint_records.txt")

# Ensure initial header in sprint_records.txt if not exists
if not os.path.exists(LOG_FILE):
    with open(LOG_FILE, "w", encoding="utf-8") as f:
        f.write("========================================================\n")
        f.write("         BUD-E USER SPRINT RECORDS (HUMAN-READABLE LOG) \n")
        f.write("========================================================\n\n")

class BudEHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        if self.path == "/api/log-sprint":
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode("utf-8"))
                name = data.get("name", "Anonymous")
                date = data.get("date", str(datetime.date.today()))
                subject = data.get("subject", "N/A")
                chapter = data.get("chapter", "N/A")
                now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

                log_entry = (
                    f"Timestamp      : {now}\n"
                    f"Student Name   : {name}\n"
                    f"Sprint Date    : {date}\n"
                    f"Subject        : {subject}\n"
                    f"Chapter        : {chapter}\n"
                    f"--------------------------------------------------------\n"
                )

                with open(LOG_FILE, "a", encoding="utf-8") as f:
                    f.write(log_entry)

                print(f"[LOGGED] Sprint recorded for: {name} ({chapter})")

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success", "message": "Logged successfully"}).encode("utf-8"))
                return
            except Exception as e:
                print("Logging error:", e)
                self.send_response(500)
                self.end_headers()
                return

        return super().do_POST()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), BudEHandler) as httpd:
        print(f"BUD-E Server running at http://localhost:{PORT}")
        print(f"Saving human-readable sprint records to: {LOG_FILE}")
        httpd.serve_forever()
