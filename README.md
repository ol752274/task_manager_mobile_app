RUN Instructions

Start Backend

cd backend
npm install
node server.js

Backend runs at:

http://localhost:5000

-----

Install Capacitor

cd frontend
npm install @capacitor/core @capacitor/cli @capacitor/android

Build & Sync
npm run build
npx cap add android
npx cap sync


----
Open Android app

npx cap open android


----------------------------------------------------------------------
Features
-----
Authentication

User signup & login (JWT-based)

Secure, user-scoped task access

Logout support
-----
 Task Management

Create, delete, and complete tasks

Priority levels (low / medium / high)

Visual tick ✔ to mark tasks complete

Task filters (all / active / completed / high priority)
-----
 Smart Reminders

Task start time (scheduledAt)

Local notification 10 minutes before task start

Uses native mobile notification APIs via Capacitor
-----
 Offline Support

Per-user task caching using Capacitor Preferences

Loads cached data instantly

Syncs automatically when online
-----
 Calendar View

Tasks grouped by date

Time-based overview of activity

Complements the priority-based list view
-----
 UI & UX

Mobile-first design

Dark mode (persistent)

Smooth, lightweight animations

Clean, accessible layout (no heavy UI libraries)

-------------------------------------------------------------------------------

Frontend

React

React Router

Axios

Capacitor

Capacitor Local Notifications

Capacitor Preferences


------


Backend

Node.js

Express

MongoDB

Mongoose

JWT Authentication

------


Mobile

Android (via Capacitor)

Android Studio

------------------------------------------------------------

