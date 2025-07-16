# ⏳ Countdown Timer App

A clean and minimal **Countdown Timer App** built with **React** and **TypeScript**.  
Set a target date & time and watch the countdown update in real time!

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

## 🎯 Features

- ⌚ Set any target date and time
- 📉 Live countdown of days, hours, minutes, and seconds
- ♻️ Auto updates every second
- 📱 Responsive UI (basic, customizable with CSS)
- 🧠 Built with React functional components + hooks

---

## 📦 Tech Stack

- **React**
- **TypeScript**
- **Vite** (fast dev server)
- **CSS Modules / Plain CSS**

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Harsh-singh-9326/Countdown_app.git
cd Countdown_app
2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Start the development server
bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser.

🧠 How It Works
User selects a target datetime-local input

setInterval() updates the difference every second

Time is calculated using JavaScript Date and Math.floor

Uses useState, useEffect, and useRef React hooks

📁 Folder Structure
bash
Copy
Edit
Countdown_app/
├── src/
│   ├── Countdown.tsx        # Main Countdown logic
│   ├── App.tsx              # Entry point
│   └── index.css            # Styling
├── index.html
├── vite.config.ts
└── README.md
🧪 Example
tsx
Copy
Edit
// Countdown.tsx (Simplified)
const [target, setTarget] = useState<string | null>(null);
const [diff, setDiff] = useState<number>(0);
const id = useRef<number | null>(null);

useEffect(() => {
  if (target) {
    id.current = setInterval(() => {
      const timeDiff = new Date(target).getTime() - new Date().getTime();
      setDiff(Math.floor(timeDiff / 1000));
    }, 1000);
  }
  return () => clearInterval(id.current!);
}, [target]);
✅ Improvements You Can Try
🎨 Add Tailwind or CSS framework for styling

🔔 Add sound/vibration when timer ends

📱 Convert to a PWA (Progressive Web App)

🧩 Add unit tests for the time logic

📜 License
MIT © Harsh Singh

Built with ❤️ using React & TypeScript
