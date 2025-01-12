const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('@/models/userModel');

exports.registerUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({ ...data, password: hashedPassword });
    return user;
};

exports.authenticateUser = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};
