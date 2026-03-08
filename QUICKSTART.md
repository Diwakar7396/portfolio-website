# Quick Start Guide

## 🎯 What Was Added

Your portfolio now has:
1. **Welcome Page** - `src/pages/welcome.html` 
   - First page visitors see
   - Collects visitor names

2. **Visitors Dashboard** - `src/pages/visitors.html`
   - Shows all visitor names and timestamps
   - Auto-updates every 5 seconds

3. **Backend Server** - `server.js`
   - Stores visitor names using Node.js & Express
   - Saves data to `visitors.json`

## 🚀 How to Run

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Backend Server
Open a terminal in the project folder and run:
```bash
npm run server
```
You should see: `✅ Portfolio backend server running on http://localhost:3000`

### Step 3: Start Frontend
Open another terminal and run:
```bash
npm start
```

### Step 4: Open in Browser
- First time visitors go to: `http://127.0.0.1:8080/welcome.html`
- Or main portfolio: `http://127.0.0.1:8080`
- See visitors: `http://127.0.0.1:8080/visitors.html`

## 📱 How It Works

1. **Visitor arrives** → Sees welcome page
2. **Enters name** → Stored in backend database
3. **Redirected** → To main portfolio page
4. **Admin checks** → Can view all visitors on `visitors.html`

## 📂 Files Created

| File | Purpose |
|------|---------|
| `src/pages/welcome.html` | Welcome page with name input |
| `src/pages/visitors.html` | Dashboard showing all visitors |
| `server.js` | Backend API server |
| `visitors.json` | Auto-created file storing visitor names |
| `SETUP.md` | Detailed documentation |

## 🎨 Navigation Links Added

Your navbar now includes:
- Home
- Education
- Projects
- Contact
- **Visitors** ← New!

## ✅ Checklist

- [x] Welcome page created
- [x] Backend server created
- [x] Visitor storage implemented
- [x] Visitors dashboard created
- [x] Navigation updated
- [x] Auto-refresh enabled
- [x] Responsive design applied

## 💡 Tips

- Keep backend running in background while developing
- Visitor data is saved in `visitors.json` (auto-created)
- You can manually delete `visitors.json` to clear all visitor data
- Both pages are responsive and work on mobile too!

---

That's it! Your portfolio now has visitor tracking! 🎉
