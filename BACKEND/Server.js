const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

const dbpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@Arbazpathan88',

    database: 'netflix',
});

app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const [existingUsers] = await dbpool.query('SELECT id FROM users WHERE email = ?', [email]);

        if (existingUsers.length > 0) {
            return res.status(409).json({ message: 'An account with this email already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await dbpool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
        const newUserId = result.insertId;

        const token = jwt.sign(
            { userId: newUserId, email: email },
            'YOUR_SUPER_SECRET_KEY',
            { expiresIn: '1h' }
        );

        res.status(201).json({ message: "User created and logged in successfully!", token: token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});
// This is the new sign-in route
app.post('/api/signin', async (req, res) => {
    // 1. Get email and password from the request body
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        // 2. Find the user in the database by their email
        // We MUST select the password field to compare it later.
        const [users] = await dbpool.query('SELECT id, email, password FROM users WHERE email = ?', [email]);

        // 3. Check if a user with that email was found
        if (users.length === 0) {
            // User not found. Send a generic error for security.
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = users[0]; // Get the user object from the array

        // 4. Compare the submitted password with the hashed password from the database
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            // Password does not match. Send a generic error.
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // 5. If password is correct, generate a JWT
        // This means the user is successfully authenticated.
        const token = jwt.sign(
            { userId: user.id, email: user.email }, // Payload
            'YOUR_SUPER_SECRET_KEY',                 // Secret Key
            { expiresIn: '1h' }                      // Options
        );

        // 6. Send a success response with the token
        // The frontend will now use this token for future requests.
        // This is how you "give access to home".
        res.status(200).json({
            message: "Login successful!",
            token: token
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error during authentication" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});