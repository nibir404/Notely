const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// Initialize app
const app = express();

// Database connection
const connectDB = require("./core/config/db");

// Routes
const authRoutes = require("./modules/auth/auth.routes");
const workspaceRoutes = require("./modules/workspace/workspace.routes");
const projectRoutes = require("./modules/project/project.routes");
const noteRoutes = require("./modules/Notes/notes.routes");
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/workspace", workspaceRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/note", noteRoutes);

// Health check
app.get("/api/notely", (req, res) => {
    res.send("Notely is running");
});

// Start server
const startServer = () => {
    app.listen(PORT, () => {
        connectDB();
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
}

startServer();