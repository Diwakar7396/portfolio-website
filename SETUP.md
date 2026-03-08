# Portfolio Website - Welcome & Visitor Tracking

A complete portfolio website with a welcome page that collects visitor names and displays them in a backend dashboard.

## 📁 Project Structure

```
src/
├── pages/
│   ├── welcome.html      # Welcome page (entry point)
│   ├── index.html        # Main portfolio page
│   ├── visitors.html     # Visitors display page
│   ├── education.html    # Education page
│   ├── projects.html     # Projects page
│   └── contact.html      # Contact page
├── css/
│   ├── main.css
│   └── responsive.css
└── js/
    └── main.js
server.js                  # Express backend for storing visitor names
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your computer

### Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the backend server (in one terminal):**
   ```bash
   npm run server
   ```
   The backend will run on `http://localhost:3000`

3. **Start the frontend (in another terminal):**
   ```bash
   npm start
   ```
   The frontend will run on `http://127.0.0.1:8080` (or similar)

### Or Run Both Simultaneously

If you have `concurrently` installed globally:
```bash
npm run dev
```

## 📝 Features

### 1. Welcome Page (`welcome.html`)
- First page visitors see when they access the portfolio
- Collects visitor's name
- Stores name in the backend database
- Redirects to main portfolio after submission

### 2. Visitors Display Page (`visitors.html`)
- Shows all visitor names who have entered the portfolio
- Displays visitor statistics (total count, current date)
- Shows timestamp when each visitor entered their name
- Auto-refreshes every 5 seconds
- Responsive card-based design

### 3. Backend API (`server.js`)

**Endpoints:**

- **GET `/api/visitors`** - Get all visitors
  ```json
  [
    {
      "id": 1234567890,
      "name": "John Doe",
      "timestamp": "2026-03-08T10:30:00.000Z"
    }
  ]
  ```

- **POST `/api/visitors`** - Add a new visitor
  ```json
  {
    "name": "Jane Smith"
  }
  ```

- **GET `/api/visitors/stats`** - Get visitor statistics
  ```json
  {
    "totalVisitors": 5,
    "visitors": [...]
  }
  ```

## 📋 Navigation

The navbar now includes a "Visitors" link that takes you to the visitors display page:
- Home
- Education
- Projects
- Contact
- **Visitors** (new)

## 🌐 Data Storage

Visitor names are stored in `visitors.json` file in the root directory. The file is automatically created when the server starts.

Example format:
```json
[
  {
    "id": 1678271400000,
    "name": "Alice",
    "timestamp": "2026-03-08T09:00:00.000Z"
  },
  {
    "id": 1678271500000,
    "name": "Bob",
    "timestamp": "2026-03-08T09:05:00.000Z"
  }
]
```

## 🎨 Features

✅ Welcome page with name input
✅ Visitor name storage in backend
✅ Visitors display page with real-time updates
✅ Responsive design for mobile and desktop
✅ Light/Dark theme support (inherited from main.css)
✅ Auto-refreshing visitor list
✅ Visitor statistics
✅ Clean and modern UI

## 🔧 Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** JSON file storage

## 📱 Responsive Design

All pages are fully responsive and work on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚙️ Configuration

You can modify the backend port in `server.js`:
```javascript
const PORT = 3000; // Change this to use a different port
```

And update the fetch URL in `welcome.html` and `visitors.html`:
```javascript
fetch('http://localhost:3000/api/visitors')
```

## 📝 Notes

- The welcome page is the entry point - visitors see it first
- Backend must be running for visitor names to be saved
- Visitor data persists across server restarts (stored in JSON file)
- The visitors page auto-refreshes every 5 seconds
- All HTML is properly secured against XSS attacks

## 🐛 Troubleshooting

**Backend not connecting?**
- Make sure Node.js is installed: `node --version`
- Check if port 3000 is available
- Make sure backend is running: `npm run server`

**Visitors not saving?**
- Check browser console for errors (F12)
- Verify backend server is running on port 3000
- Check that network requests succeed in browser DevTools

**CORS errors?**
- The backend includes CORS headers to allow cross-origin requests
- If issues persist, check the server console for errors

---

Made with ❤️ for your portfolio
