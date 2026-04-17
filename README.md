<!--
  KeenKeeper - Modern Next.js Dashboard
  Professional README for a portfolio-ready productivity web app
-->

<div align="center">
  <img src="https://img.icons8.com/fluency/96/000000/maintenance.png" alt="KeenKeeper Logo" width="80" />
  <h1>KeenKeeper</h1>
  <p><strong>Stay Sharp. Stay Organized.</strong></p>
  <p>A modern, responsive dashboard web app for managing data, tracking stats, and visualizing timelines with an elegant UI.</p>

  <a href="https://keenkeeper-ph.vercel.app/">
    <img src="https://img.shields.io/badge/Live_Demo-keenkeeper--ph.vercel.app-0a0a0a?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel" />

  <br />
  <br />
</div>

---

## 📌 Overview

**KeenKeeper** is a feature-rich dashboard application built to help you track metrics, manage friends, visualize statistics, and explore timelines — all in one clean, responsive interface. Perfect for productivity enthusiasts and data-driven users.

> 🔗 **Live Demo:** [https://keenkeeper-ph.vercel.app/](https://keenkeeper-ph.vercel.app/)

---

## ✨ Key Features

- 📊 **Interactive Counter Dashboard** – Real-time data tracking and visualization  
- 👥 **Friends Management** – Add, view, and manage friend cards  
- 📈 **Stats Overview** – Key metrics at a glance  
- ⏱️ **Timeline View** – Visualize events and progress over time  
- 👤 **User Profiles** – Dynamic profile pages with routing (`/profile/[id]`)  
- 🎨 **Modern UI Components** – Built with reusable, modular components  
- 🌗 **Theme Support** – Ready for light/dark mode (DaisyUI)  
- 📱 **Fully Responsive** – Seamless experience across all devices  
- ⚡ **Fast Performance** – Next.js App Router with optimized loading states  

---

## 🧰 Tech Stack

| Category          | Technologies                                                                 |
|-------------------|------------------------------------------------------------------------------|
| **Framework**     | Next.js 15 (App Router)                                                     |
| **UI Library**    | React 19                                                                     |
| **Styling**       | Tailwind CSS + DaisyUI                                                       |
| **Charts**        | Recharts (for data visualization)                                           |
| **Icons**         | React Icons / Custom assets                                                  |
| **Deployment**    | Vercel                                                                       |
| **Package Manager** | npm / yarn                                                                 |

---

## 📁 Project Structure

```bash
KeenKeeper/
│
├── .next/                  # Next.js build output
├── .vercel/                # Vercel deployment config
├── node_modules/           # Dependencies
├── public/                 # Static assets
│
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (main)/         # Main layout group
│   │   │   ├── profile/[id]/  # Dynamic profile routes
│   │   │   ├── page.jsx        # Main dashboard
│   │   │   ├── stats/          # Stats page
│   │   │   └── timeline/       # Timeline view
│   │   ├── globals.css     # Global styles & Tailwind
│   │   ├── layout.jsx      # Root layout
│   │   ├── loading.jsx     # Global loading UI
│   │   └── not-found.jsx   # 404 page
│   │
│   ├── assets/             # Images, fonts, icons
│   │
│   ├── components/         # Reusable React components
│   │   ├── shared/         # Shared utilities
│   │   ├── ui/             # Base UI components
│   │   ├── bodyUi/         # Body layout components
│   │   ├── counterDashboard/  # Counter dashboard logic
│   │   ├── friends/        # Friends management
│   │   │   ├── card/
│   │   │   │   ├── Cards.jsx
│   │   │   │   └── FriendsCards.jsx
│   │   │   └── MainBody.jsx
│   │   └── othersUi/       # Miscellaneous UI components
│   │
│   └── .env.local          # Local environment variables
│
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── next.config.js          # Next.js configuration
└── README.md               # You are here!
