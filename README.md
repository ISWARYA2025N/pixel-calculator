📟 Pixel Calculator — Dockerized Web App

A simple Pixel Calculator Web App built using HTML, JavaScript, and Python (Flask), packaged with Docker for easy deployment.

🚀 Features

Convert & calculate pixel values

Clean and responsive UI

Flask backend (app.py)

Dockerized for easy deployment

📂 Project Files
index.html
script.js
style.css
app.py
requirements.txt
Dockerfile

▶️ Run Without Docker

Install dependencies:

pip install -r requirements.txt


Run the app:

python app.py


App runs at:
👉 http://localhost:5000

🐳 Run With Docker
1️⃣ Build Image
docker build -t pixel-calculator .

2️⃣ Run Container
docker run -d -p 5000:5000 pixel-calculator


App will be available at:
👉 http://localhost:5000

📜 Requirements

requirements.txt includes Python dependencies (Flask, etc.).

📄 License

Open-source. Free to use.
