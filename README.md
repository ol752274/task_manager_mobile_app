Features
 Authentication

User signup & login (JWT-based)

Secure, user-scoped task access

Logout support

 Task Management

Create, delete, and complete tasks

Priority levels: low / medium / high

Visual tick ✔ to mark tasks as complete

Task filters:

All

Active

Completed

High priority

 Smart Reminders

Task start time (scheduledAt)

Local notification 10 minutes before task start

Uses native mobile notification APIs via Capacitor

 Offline Support

Per-user task caching using Capacitor Preferences

Cached data loads instantly on app start

Automatically syncs with server when online

🗓 Calendar View

Tasks grouped by date

Time-based overview of activity

Complements the priority-based list view

 UI & UX

Mobile-first design

Dark mode (persistent across sessions)

Smooth, lightweight animations

Clean and accessible UI (no heavy UI libraries)

 Tech Stack
Frontend

React

React Router

Axios

Capacitor

Capacitor Local Notifications

Capacitor Preferences

Backend

Node.js

Express

MongoDB

Mongoose

JWT Authentication

Mobile

Android (via Capacitor)

Android Studio



 Run Instructions
1️⃣ Start Backend
cd backend
npm install
node server.js


Backend runs at:

http://localhost:5000

2️⃣ Install Capacitor
cd frontend
npm install @capacitor/core @capacitor/cli @capacitor/android

3️⃣ Build & Sync Frontend
npm run build
npx cap add android
npx cap sync

4️⃣ Open Android Project
npx cap open android


Run the app using:

Android Emulator or

Physical Android device (recommended)
