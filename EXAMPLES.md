# 📖 Complete Usage Examples

## Starting the Application

### Terminal 1: Start Backend Server
```bash
$ npm run server

✅ Portfolio backend server running on http://localhost:3000
📝 Visitors are being stored in: D:\New folder\portfolio-website\visitors.json
```

### Terminal 2: Start Frontend
```bash
$ npm start

Serving "D:\New folder\portfolio-website\src\pages" at http://127.0.0.1:8080
Get `Ctrl+c` to quit
```

## What Happens When a Visitor Arrives

### Step 1: Welcome Page
Visitor navigates to: `http://127.0.0.1:8080/welcome.html`

They see:
```
╔═══════════════════════════════╗
║          Welcome!             ║
║                               ║
║  Please enter your name to    ║
║         continue              ║
║                               ║
║  ┌──────────────────────────┐ ║
║  │ Enter your name          │ ║
║  └──────────────────────────┘ ║
║                               ║
║  [  Enter Portfolio  ]        ║
╚═══════════════════════════════╝
```

### Step 2: Visitor Enters Name
Visitor types: "Alice Johnson" and clicks "Enter Portfolio"

### Step 3: Backend Processing
Backend receives POST request:
```
POST http://localhost:3000/api/visitors
{
  "name": "Alice Johnson"
}
```

Server saves to `visitors.json`:
```json
[
  {
    "id": 1678271400000,
    "name": "Alice Johnson",
    "timestamp": "2026-03-08T10:30:00.000Z"
  }
]
```

Response:
```json
{
  "success": true,
  "message": "Visitor saved successfully",
  "visitor": {
    "id": 1678271400000,
    "name": "Alice Johnson",
    "timestamp": "2026-03-08T10:30:00.000Z"
  }
}
```

### Step 4: Redirect to Portfolio
After 1.5 seconds, page redirects to: `http://127.0.0.1:8080/index.html`

---

## Admin: Viewing All Visitors

Admin navigates to: `http://127.0.0.1:8080/visitors.html`

### Dashboard shows:

```
╔════════════════════════════════════════════╗
║     👥 Portfolio Visitors                  ║
╠════════════════════════════════════════════╣
║                                            ║
║  ┌────────────┐  ┌──────────────┐        ║
║  │     2      │  │  3/8/2026    │        ║
║  │   Total    │  │    Date      │        ║
║  │ Visitors   │  │              │        ║
║  └────────────┘  └──────────────┘        ║
║                                            ║
║  Recent Visitors:                         ║
║  ┌──────────────────────────────────────┐ ║
║  │ 👤 Alice Johnson                     │ ║
║  │ 🕐 3/8/2026, 10:30:00 AM            │ ║
║  └──────────────────────────────────────┘ ║
║  ┌──────────────────────────────────────┐ ║
║  │ 👤 Bob Smith                         │ ║
║  │ 🕐 3/8/2026, 10:25:00 AM            │ ║
║  └──────────────────────────────────────┘ ║
║                                            ║
║  [  🔄 Refresh  ]                         ║
╚════════════════════════════════════════════╝
```

---

## API Usage Examples

### Example 1: Save a Visitor Using cURL

```bash
curl -X POST http://localhost:3000/api/visitors \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe"}'
```

Response:
```json
{
  "success": true,
  "message": "Visitor saved successfully",
  "visitor": {
    "id": 1678271500000,
    "name": "John Doe",
    "timestamp": "2026-03-08T10:35:00.000Z"
  }
}
```

### Example 2: Get All Visitors Using cURL

```bash
curl http://localhost:3000/api/visitors
```

Response:
```json
[
  {
    "id": 1678271400000,
    "name": "Alice Johnson",
    "timestamp": "2026-03-08T10:30:00.000Z"
  },
  {
    "id": 1678271500000,
    "name": "Bob Smith",
    "timestamp": "2026-03-08T10:25:00.000Z"
  }
]
```

### Example 3: JavaScript Fetch

```javascript
// Save a visitor
async function saveVisitor(name) {
  const response = await fetch('http://localhost:3000/api/visitors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  
  const result = await response.json();
  console.log(result);
}

// Get all visitors
async function getVisitors() {
  const response = await fetch('http://localhost:3000/api/visitors');
  const visitors = await response.json();
  console.log(visitors);
}

// Usage
saveVisitor('Charlie Brown');
getVisitors();
```

---

## File Structure After Setup

```
portfolio-website/
├── node_modules/              (created by npm install)
├── src/
│   ├── assets/
│   │   └── images/
│   ├── css/
│   │   ├── main.css
│   │   └── responsive.css
│   ├── js/
│   │   └── main.js
│   └── pages/
│       ├── welcome.html       ⭐ NEW
│       ├── visitors.html      ⭐ NEW
│       ├── index.html
│       ├── education.html
│       ├── projects.html
│       └── contact.html
├── visitors.json              ⭐ NEW (auto-created)
├── server.js                  ⭐ NEW
├── package.json               (updated)
├── package-lock.json
├── README.md
├── TODO.md
├── SETUP.md                   ⭐ NEW
├── QUICKSTART.md              ⭐ NEW
└── FEATURES.md                ⭐ NEW
```

---

## Testing the System

### Test 1: Welcome Form
1. Go to `http://127.0.0.1:8080/welcome.html`
2. Enter name: "Test User"
3. Click "Enter Portfolio"
4. Should redirect to main portfolio
5. Check backend console for success message

### Test 2: Check Visitor was Saved
1. Go to `http://127.0.0.1:8080/visitors.html`
2. Should see "Test User" in the list
3. Should show correct timestamp

### Test 3: Check JSON File
1. Open `visitors.json` in project root
2. Should contain entry with "Test User"

### Test 4: Multiple Visitors
1. Test with different names
2. Verify all appear in visitors.html
3. Check timestamps are correct

---

## Customization Ideas

### Change Welcome Message
Edit `welcome.html` line 129:
```html
<h1>Welcome!</h1>
<p>Please enter your name to continue</p>
```

### Change Port
Edit `server.js` line 6:
```javascript
const PORT = 3000; // Change to your port
```

### Change Auto-refresh Interval
Edit `visitors.html` line 311:
```javascript
setInterval(loadVisitors, 5000); // Change 5000 to milliseconds
```

### Add More Fields
In `welcome.html` form, add:
```html
<input type="email" placeholder="Enter your email" required />
<input type="text" placeholder="Enter your company" />
```

And update backend to save these fields.

---

## Error Handling

### If Backend Shows This Error:
```
Error: listen EADDRINUSE: address already in use :::3000
```
**Solution:** Another app is using port 3000. Change PORT in server.js or close the other app.

### If Welcome Page Shows This Error:
```
Error connecting to server. Proceeding to portfolio...
```
**Solution:** Backend is not running. Start it with `npm run server`

### If Visitors Page Shows This Error:
```
Failed to load visitors. Make sure the backend server is running on port 3000.
```
**Solution:** Check backend is running and no CORS issues exist.

---

## Server Logs

### Normal Operation
```
✅ Portfolio backend server running on http://localhost:3000
📝 Visitors are being stored in: D:\portfolio-website\visitors.json

POST /api/visitors - 200 OK
GET /api/visitors - 200 OK
GET /api/visitors - 200 OK
GET /api/visitors/stats - 200 OK
```

### Errors to Watch For
```
Error reading visitors: ENOENT: no such file or directory
Error saving visitor: JSON.parse error
Error: Server connection refused
CORS error: Cross-origin request blocked
```

---

## Next Steps

1. ✅ Start the server
2. ✅ Test welcome page
3. ✅ Check visitors dashboard
4. 📝 Add more fields (email, phone)
5. 🗄️ Connect to real database (MongoDB, PostgreSQL)
6. 🚀 Deploy to production

Enjoy your portfolio with visitor tracking! 🎉
