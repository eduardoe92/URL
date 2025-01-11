const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('@/models/userModel');
const { validateRegistration } = require('@/utils/validators');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const { error } = validateRegistration(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};