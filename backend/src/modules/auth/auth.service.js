const User = require("./auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../core/config/env");

/**
 * Registers a new user with a hashed password.
 * @param {string} name - The user's full name.
 * @param {string} email - The user's unique email address.
 * @param {string} password - The plain-text password to be hashed.
 * @returns {Promise<Object>} The created user document.
 */
const registerUser = async (name, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    return user;
}

/**
 * Authenticates a user and generates a JWT.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's plain-text password.
 * @returns {Promise<Object>} An object containing the user document and the JWT token.
 */
const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    return { user, token };
}

module.exports = { registerUser, loginUser };