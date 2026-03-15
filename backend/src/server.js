const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const connectDB = require("./core/config/db");
const authRoutes = require("./modules/auth/auth.routes");
const workspaceRoutes = require("./modules/workspace/workspace.routes");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/workspace", workspaceRoutes);

app.get("/api/notely", (req, res) => {
    res.send("Notely is running");
});

const startServer = () => {
    app.listen(PORT, () => {
        connectDB();
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
}

startServer();