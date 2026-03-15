# Notely 📝

Notely is a modern, high-performance note-taking and workspace management application. It allows users to organize their thoughts, projects, and tasks into secure, dedicated workspaces.

## 🚀 Features

- **User Authentication**: Secure signup and login using JWT (JSON Web Tokens) and bcrypt hashing.
- **Workspace Management**: Create, view, update, and delete workspaces to stay organized.
- **Project Structure**: Projects live inside workspaces for better categorization.
- **Protected Routes**: Secure API endpoints guarded by custom authentication middleware.
- **Modular Architecture**: Feature-based organization (Auth, Workspace, Project).

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Security**: JWT, bcryptjs
- **Frontend**: (In Development)

## 📁 Project Structure

```text
Notely/
├── .agent/                 # Custom AI agents and workflows
│   └── workflows/          # Automation scripts (test-module, auto-comment)
├── backend/                # Server-side application
│   ├── src/
│   │   ├── core/           # Shared core logic
│   │   │   ├── config/     # Database and Env configurations
│   │   │   ├── middleware/ # Auth & Request logging middleware
│   │   │   └── utils/      # Shared utilities (logger, helpers)
│   │   ├── modules/        # Feature-based business logic
│   │   │   ├── auth/       # User Authentication & JWT
│   │   │   ├── workspace/  # Workspace Management
│   │   │   │   ├── workspace.model.js
│   │   │   │   ├── workspace.service.js
│   │   │   │   ├── workspace.controller.js
│   │   │   │   └── workspace.routes.js
│   │   │   ├── project/    # Project Management
│   │   │   │   ├── project.model.js
│   │   │   │   ├── project.service.js
│   │   │   │   ├── project.controller.js
│   │   │   │   └── project.routes.js
│   │   │   └── notes/      # Note-Taking (Rich Content)
│   │   │       ├── notes.model.js
│   │   │       ├── notes.service.js
│   │   │       ├── notes.controller.js
│   │   │       └── notes.routes.js
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

You can use the built-in **test-module** workflow or a REST client (like Thunder Client or Postman) to test the following:
- **Auth**: `/api/auth/register`, `/api/auth/login`
- **Workspace**: `/api/workspace` (Protected)
- **Project**: `/api/project` (Protected)

## 🛡️ License

This project is licensed under the MIT License.
