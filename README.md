# 🌍 Cyberkonsults Digital Protection Online — Empowering Families in a Digital World

Welcome to the official Cyberkonsults platform repository!  
This platform empowers parents and young adults (ages 11+) to develop strong digital safety skills through interactive quizzes, achievement badges, downloadable certificates, and live resources.

![Cyberkonsults Banner](./public/banner.jpg) <!-- You can add a banner later -->

---

## 🚀 Live Demo

[Visit Cyberkonsults Website](https://your-custom-domain.com)

---

## 📚 Features

- Persona-driven Experiences (Parents / Young Adults)
- Multilingual Support (EN, ES, FR, ZH, YO, HA, IG)
- Interactive Beginner / Intermediate / Expert Quizzes
- Dynamic Badge Unlock System
- Certificate Generator (PDF download)
- Admin Dashboard (track learner progress)
- Blog & Events Page
- Live Email Contact Form (EmailJS integration)
- Fully Mobile Responsive
- SEO Optimized
- Global Hosting Ready (Netlify / Vercel)

---

## 📂 Project Structure

```plaintext
cyberkonsults_full_site/
├── .gitignore
├── .env                     # DO NOT commit — stores Supabase keys
├── README.md                # Full GitHub repo readme
├── netlify.toml             # Optional: Netlify deployment config
├── vercel.json              # Optional: Vercel deployment config
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
│
├── public/
│   └── index.html           # Root HTML file
│
├── src/
│   ├── index.js             # React entry point
│   ├── index.css            # Tailwind styles
│   ├── App.jsx              # React Router + layout wrapper
│   ├── supabase.js          # Supabase client (reads from .env)
│
│   ├── assets/
│   │   └── cyberkonsults_logo.png     # Company logo
│
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── QuizLauncher.jsx
│   │   ├── BadgeDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── CertificateGenerator.jsx   # Download certificate as PDF
│   │   ├── BeginnerQuiz.jsx
│   │   ├── IntermediateQuiz.jsx
│   │   └── ExpertQuiz.jsx
│
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx               # With EmailJS integration
│   │   └── Blog.jsx                  # Blog + Events listing
│
│   ├── services/
│   │   ├── auth.js                   # Signup/login logic
│   │   └── quizService.js           # Submit quiz to Supabase
