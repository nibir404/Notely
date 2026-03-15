const { registerUser, loginUser } = require("./auth.service");

const registerController = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await registerUser(name, email, password);
    res.status(201).json({message: "User registered successfully", user});
}

const loginController = async (req, res) => {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    res.status(200).json({message: "User logged in successfully", user});
}

module.exports = { registerController, loginController };