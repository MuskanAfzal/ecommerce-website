const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { username, email_or_phone, password } = req.body;
        console.log('Registering user with:', { username, email_or_phone, password });
        const user = new User({ username, email_or_phone, password });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(400).json({ message: err.message });
    }
};


exports.loginUser = async (req, res) => {
    try {
        const { email_or_phone, password } = req.body;
        const user = await User.findOne({ email_or_phone });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).send('Authentication failed');
        }
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { username: user.username, role: user.role } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.registerAdmin = async (req, res) => {
    try {
        const { username, email_or_phone, password } = req.body;
        const user = new User({ username, email_or_phone, password, role: 'admin' });
        await user.save();
        res.status(201).send('Admin registered successfully');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
