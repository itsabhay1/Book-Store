# BookNest 📚

A full-stack book discovery and course platform built with the MERN stack. Users can browse free and paid book courses, register/login securely, and access protected content — all with a responsive UI and dark mode support.

🔗 **Live Demo:** [booknest-steel.vercel.app](https://booknest-steel.vercel.app)

---

## Features

- 🔐 **User Authentication** — Secure signup & login with bcrypt password hashing and email validation
- 📖 **Book Catalog** — Browse books fetched dynamically from MongoDB, filtered by category (Free / Paid)
- 🎠 **Carousel UI** — Auto-playing responsive book slider built with `react-slick`
- 🔒 **Protected Routes** — Course page accessible only to authenticated users via React Context
- 🌙 **Dark Mode** — System-aware theme toggle persisted in localStorage
- 📱 **Fully Responsive** — Mobile-first layout using Tailwind CSS + DaisyUI
- 🚀 **Deployed on Vercel** — Both frontend and backend deployed independently

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 + Vite | UI framework and build tool |
| React Router DOM v7 | Client-side routing & protected routes |
| Tailwind CSS + DaisyUI | Styling and component library |
| Axios | HTTP client for API communication |
| React Hook Form | Form handling and validation |
| React Hot Toast | User feedback notifications |
| React Slick | Responsive carousel component |
| React Context API | Global auth state management |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express 5 | REST API server |
| MongoDB + Mongoose | Database and ODM |
| bcryptjs | Password hashing |
| Validator.js | Email format validation |
| dotenv | Environment variable management |
| CORS | Cross-origin request handling |

---

## Project Structure

```
Book-Store/
├── Backend/
│   └── src/
│       ├── controllers/
│       │   ├── book.controller.js     # Book fetch logic
│       │   └── user.controller.js     # Signup & login logic
│       ├── db/
│       │   └── index.js               # MongoDB connection
│       ├── models/
│       │   ├── book.model.js          # Book schema
│       │   └── user.model.js          # User schema with validation
│       ├── Routes/
│       │   ├── book.route.js          # GET /api/v1/book
│       │   └── user.route.js          # POST /api/v1/user/signup & login
│       └── index.js                   # Express app entry point
│
└── Frontend/
    └── src/
        ├── components/
        │   ├── Navbar.jsx             # Sticky navbar with dark mode toggle
        │   ├── Banner.jsx             # Hero section
        │   ├── freeBook.jsx           # Free books carousel
        │   ├── Cards.jsx              # Book card component
        │   ├── Login.jsx              # Login modal with form validation
        │   ├── Signup.jsx             # Signup page
        │   ├── Logout.jsx             # Logout handler
        │   ├── Contact.jsx            # Contact page
        │   └── About.jsx              # About page
        ├── context/
        │   └── AuthProvider.jsx       # Global auth context
        ├── Home/Home.jsx              # Home page composition
        ├── Courses/Courses.jsx        # Protected courses page
        └── App.jsx                    # Routes + auth guard
```

---

## API Endpoints

### User Routes — `/api/v1/user`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/signup` | Register a new user (hashes password with bcrypt) |
| POST | `/login` | Authenticate user and return user object |

### Book Routes — `/api/v1/book`
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Fetch all books from MongoDB |

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository

```bash
git clone https://github.com/itsabhay1/Book-Store.git
cd Book-Store
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend/` directory:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
PORT=8000
CORS_ORIGIN=http://localhost:5173
SALT=10
```

Start the backend server:

```bash
npm run dev
```

Backend runs at: `http://localhost:8000`

### 3. Setup Frontend

```bash
cd ../Frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

> **Note:** The frontend is pre-configured to hit the live Vercel backend. To use your local backend, update the API URLs in `Login.jsx`, `Signup.jsx`, and `freeBook.jsx` to `http://localhost:8000`.

---

## Deployment

Both services are deployed separately on Vercel.

### Backend (Vercel Serverless)
- Set environment variables in Vercel dashboard: `MONGODB_URI`, `PORT`, `CORS_ORIGIN`, `SALT`
- `vercel.json` in `Backend/` rewrites all routes to `src/index.js`

### Frontend (Vercel Static)
- `vercel.json` in `Frontend/` handles SPA routing (rewrites all paths to `index.html`)
- No environment variables needed — API URLs are hardcoded to the live backend

---
