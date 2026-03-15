# Notely 📝

Notely is a modern, high-performance note-taking and workspace management application. It allows users to organize their thoughts, projects, and tasks into secure, dedicated workspaces.

## 🚀 Features

- **User Authentication**: Secure signup and login using JWT (JSON Web Tokens) and bcrypt hashing.
- **Workspace Management**: Create, view, update, and delete workspaces to stay organized.
- **Note-Taking** (Coming Soon): Feature-rich note management within each workspace.
- **Protected Routes**: Secure API endpoints guarded by custom authentication middleware.
- **RESTful API**: Clean and well-documented API structure.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Security**: JWT, bcryptjs
- **Frontend**: (In Development)

## 📁 Project Structure

```text
Notely/
├── .agent/                 # Custom AI agents and workflows
│   └── workflows/          # Automation scripts (e.g., test-module)
├── backend/                # Server-side application
│   ├── src/
│   │   ├── core/           # Shared core logic
│   │   │   ├── config/     # Database and Env configurations
│   │   │   ├── middleware/ # Auth & Request logging middleware
│   │   │   └── utils/      # Shared utilities (logger, helpers)
│   │   ├── modules/        # Feature-based business logic
│   │   │   ├── auth/       # User Auth (Register, Login)
│   │   │   └── workspace/  # Workspace CRUD operations
│   │   │       ├── workspace.model.js      # DB Schema
│   │   │       ├── workspace.service.js    # Data Access Logic
│   │   │       ├── workspace.controller.js # Request Handlers
│   │   │       └── workspace.routes.js     # API Route Definitions
│   │   └── server.js       # Main App Entry Point
│   ├── .env                # Environment keys (Private)
│   └── package.json        # Dependencies and Scripts
├── frontend/               # Client-side (Coming Soon)
├── .gitignore              # Files to exclude from version control
└── README.md               # Project documentation
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) account or local instance

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Notely
   ```

2. **Setup the Backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `backend/` directory with the following:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

## 🧪 API Testing

You can test the authentication and workspace endpoints using the provided workflow:
1. Use the **REST Client** extension in VS Code.
2. Run the registration and login tests.
3. Use the generated token for workspace CRUD operations.

## 🛡️ License

This project is licensed under the MIT License.
