const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to store visitor names
const visitorsFile = path.join(__dirname, 'visitors.json');

// Initialize visitors file if it doesn't exist
if (!fs.existsSync(visitorsFile)) {
  fs.writeFileSync(visitorsFile, JSON.stringify([]));
}

// GET all visitors
app.get('/api/visitors', (req, res) => {
  try {
    const data = fs.readFileSync(visitorsFile, 'utf8');
    const visitors = JSON.parse(data);
    res.json(visitors);
  } catch (error) {
    console.error('Error reading visitors:', error);
    res.status(500).json({ error: 'Failed to fetch visitors' });
  }
});

// POST a new visitor
app.post('/api/visitors', (req, res) => {
  try {
    const { name } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ error: 'Name is required' });
    }

    const data = fs.readFileSync(visitorsFile, 'utf8');
    const visitors = JSON.parse(data);

    const newVisitor = {
      id: Date.now(),
      name: name.trim(),
      timestamp: new Date().toISOString(),
    };

    visitors.push(newVisitor);
    fs.writeFileSync(visitorsFile, JSON.stringify(visitors, null, 2));

    res.json({ 
      success: true, 
      message: 'Visitor saved successfully',
      visitor: newVisitor 
    });
  } catch (error) {
    console.error('Error saving visitor:', error);
    res.status(500).json({ error: 'Failed to save visitor' });
  }
});

// GET visitor statistics
app.get('/api/visitors/stats', (req, res) => {
  try {
    const data = fs.readFileSync(visitorsFile, 'utf8');
    const visitors = JSON.parse(data);
    
    res.json({
      totalVisitors: visitors.length,
      visitors: visitors,
    });
  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Portfolio backend server running on http://localhost:${PORT}`);
  console.log(`📝 Visitors are being stored in: ${visitorsFile}`);
});
