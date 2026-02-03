#  Task Management Mobile App

A feature-rich, mobile-first task management application with offline support, smart reminders, and calendar view. Built with React and Capacitor for native Android functionality.

##  Features

###  Authentication
- User signup & login (JWT-based)
- Secure, user-scoped task access
- Logout support

###  Task Management
- Create, delete, and complete tasks
- Priority levels: **low** / **medium** / **high**
- Visual tick ✔ to mark tasks as complete
- **Task filters:**
  - All
  - Active
  - Completed
  - High priority

###  Smart Reminders
- Task start time (`scheduledAt`)
- Local notification **10 minutes before** task start
- Uses native mobile notification APIs via Capacitor

###  Offline Support
- Per-user task caching using Capacitor Preferences
- Cached data loads instantly on app start
- Automatically syncs with server when online

###  Calendar View
- Tasks grouped by date
- Time-based overview of activity
- Complements the priority-based list view

###  UI & UX
- Mobile-first design
- Dark mode (persistent across sessions)
- Smooth, lightweight animations
- Clean and accessible UI (no heavy UI libraries)

## 🛠 Tech Stack

### Frontend
- **React** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP client
- **Capacitor** - Native mobile bridge
- **Capacitor Local Notifications** - Push notifications
- **Capacitor Preferences** - Local storage

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication

### Mobile
- **Android** (via Capacitor)
- **Android Studio** - Development environment

##  Run Instructions

### 1️ Start Backend

```bash
cd backend
npm install
node server.js
```

**Backend runs at:** `http://localhost:5000`

---

### 2️ Install Capacitor

```bash
cd frontend
npm install @capacitor/core @capacitor/cli @capacitor/android
```

---

### 3️ Build & Sync Frontend

```bash
npm run build
npx cap add android
npx cap sync
```

---

### 4️ Open Android Project

```bash
npx cap open android
```

**Run the app using:**
- Android Emulator **or**
- Physical Android device (recommended)

---

##  Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (running locally or remote connection)
- **Android Studio** (for Android development)
- **Java JDK** (required by Android Studio)

## 🔧 Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret_key_here
```

### Frontend API Configuration

Update the API base URL in your frontend code to point to your backend:

```javascript
// Example: src/api/axios.js
const API_URL = 'http://localhost:5000';
```

##  Mobile Development Tips

- **Enable USB Debugging** on your Android device for physical device testing
- **Use Android Emulator** for quick testing without a physical device
- Run `npx cap sync` after any changes to native plugins or configuration
- Check logs with `adb logcat` for debugging

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


This project is open source and available under the MIT License.

---

**Built with ❤️ using React and Capacitor**
