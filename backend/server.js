const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

// Endpoint to serve the JSON file data
app.get('/products', (req, res) => {
    fs.readFile('./config/db.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading the file' });
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
