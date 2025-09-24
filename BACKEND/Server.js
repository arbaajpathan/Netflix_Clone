
const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5000; // Your port is 5000
app.use(cors());
app.use(express.json());

// FIX #1: Database credentials must be strings.
// It's highly recommended to move these to a .env file.
const dbpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@Arbazpathan88', // Make sure this is correct
    database: 'netflix',
});

app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        // FIX #2: Check if the user already exists before inserting
        const [existingUsers] = await dbpool.query('SELECT id FROM users WHERE email = ?', [email]);

        if (existingUsers.length > 0) {
            return res.status(409).json({ message: 'An account with this email already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        const [result] = await dbpool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
        const newUserId = result.insertId;

        // FIX #3: Create and send a JWT immediately after creation
        const token = jwt.sign(
            { userId: newUserId, email: email },
            'YOUR_SUPER_SECRET_KEY', // IMPORTANT: Put this in a .env file as JWT_SECRET
            { expiresIn: '1h' }
        );

        res.status(201).json({ message: "User created and logged in successfully!", token: token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});