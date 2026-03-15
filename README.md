# Notely 📝

Notely is a modern, high-performance note-taking and workspace management application. It focuses on helping teams and individuals organize complex projects with AI-powered insights.

## 🚀 Key Features

- **User Authentication**: Secure JWT-based registration and login system.
- **Workspace Management**: Organize your work into distinct, isolated workspaces.
- **Project Structure**: Nested projects within workspaces for deep organization.
- **Rich Notes**: Create and manage detailed notes with project context.
- **AI-Powered Insights**: Automated analysis of note content to identify:
  - Sentiment Trends
  - Pain Points
  - Feature Requests
  - Suggested Solutions
- **Asynchronous Processing**: Background job handling using **BullMQ** and **Redis** for non-blocking AI analysis.
- **Modular Backend**: Clean, feature-based architecture for high scalability.

## 📁 Project Structure

```text
Notely/
├── .agent/                 # AI Agency configurations & automation workflows
├── backend/                # Primary Node.js/Express server
│   ├── src/
│   │   ├── core/           # Universal application core
│   │   │   ├── config/     # Database, Redis, and ENV setup
│   │   │   ├── middleware/ # Auth guard & request logic
│   │   │   └── utils/      # Cross-module helpers
│   │   ├── modules/        # Feature-driven business logic
│   │   │   ├── auth/       # Security & Identity
│   │   │   ├── workspace/  # Organization containers
│   │   │   ├── project/    # Thematic project groups
│   │   │   ├── notes/      # Content management & analysis trigger
│   │   │   └── insight/    # AI Result storage & retrieval
│   │   ├── queues/         # BullMQ queue definitions (e.g., ai-analysis)
│   │   ├── workers/        # Dedicated job processors (Background Workers)
│   │   ├── jobs/           # Job dispatchers (Event-driven analysis)
│   │   └── server.js       # Application entry point
│   ├── .env                # Secret configurations
│   └── package.json        # Dependencies (Express, Mongoose, BullMQ, ioredis)
└── README.md               # System Documentation
```

## 🛠️ Technology Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (ODM: Mongoose)
- **Caching/Queue**: [Redis](https://redis.io/)
- **Task Queue**: [BullMQ](https://docs.bullmq.io/)
- **Authentication**: JSON Web Tokens (JWT) & Bcrypt

## ⚙️ Development Setup

### 1. Requirements

- Node.js (v18+)
- MongoDB
- Redis Server (Running locally or via Docker)

### 2. Environment Configuration

Create a `.env` file in the `/backend` folder:

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/notely
JWT_SECRET=your_secret_key
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

### 3. Installation & Boot

```bash
cd backend
npm install
npm run dev
```

## 🧠 Background Processing

The AI analysis is decoupled from the main request flow. When a note is created:

1.  A job is added to the `ai-analysis` queue.
2.  An **AI Worker** picks up the job asynchronously.
3.  Simulated AI logic extracts insights.
4.  Results are stored in the `Insights` collection.

---

_Created with ❤️_
