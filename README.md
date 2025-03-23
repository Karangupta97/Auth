# Medicare Authentication System

This project is a full-stack authentication system for a healthcare platform called **Medicare**. It includes user registration, email verification, login, password reset, and dashboard functionalities. The system is built using modern technologies like React, Vite, TailwindCSS, Node.js, Express, MongoDB, and Zustand for state management.

---

## Features

### Frontend
- **React** with **Vite** for fast development.
- **TailwindCSS** for responsive and modern UI.
- **Zustand** for state management.
- **React Router** for navigation.
- **Framer Motion** for animations.
- **React Hot Toast** for notifications.

### Backend
- **Node.js** with **Express** for API development.
- **MongoDB** for database management.
- **JWT** for secure authentication.
- **Resend API** for email services.
- **Bcrypt.js** for password hashing.

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/medicare-auth.git
   cd medicare-auth
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd Backend
   npm install
   cd ../Frontend
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `Backend` directory.
   - Add the required variables as shown in the `.env` file provided.

4. Start the development servers:
   - Backend:
     ```bash
     cd Backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd Frontend
     npm run dev
     ```

5. Open the application in your browser:
   ```
   http://localhost:5173
   ```

---

## Project Structure

### Frontend
```
Frontend/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Application pages
│   ├── store/            # Zustand store for state management
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   └── index.css         # TailwindCSS styles
├── public/               # Static assets
├── vite.config.js        # Vite configuration
└── package.json          # Frontend dependencies
```

### Backend
```
Backend/
├── controllers/          # API controllers
├── middleware/           # Middleware functions
├── models/               # Mongoose models
├── routes/               # API routes
├── utils/                # Utility functions
├── mailtrap/             # Email templates and services
├── DB/                   # Database connection
├── server.js             # Main server file
└── package.json          # Backend dependencies
```

---

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user.
- `POST /api/auth/login` - Login with email and password.
- `POST /api/auth/logout` - Logout the user.
- `POST /api/auth/verify-email` - Verify email with OTP.
- `POST /api/auth/resend-otp` - Resend email verification OTP.
- `POST /api/auth/forgot-password` - Request password reset link.
- `POST /api/auth/reset-password/:token` - Reset password using token.
- `GET /api/auth/check-auth` - Check user authentication status.

---

## Technologies Used

### Frontend
- React
- Vite
- TailwindCSS
- Zustand
- React Router
- Framer Motion
- React Hot Toast

### Backend
- Node.js
- Express
- MongoDB
- JWT
- Resend API
- Bcrypt.js

---

## Environment Variables

### Backend `.env`
```properties
PORT=4000
MONGO_URI=mongodb://localhost:27017/Medicare
JWT_SECRET=your_jwt_secret
NODE_ENV=development

CLIENT_URL=http://localhost:5173
RESEND_API_KEY=your_resend_api_key
```

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Resend API](https://resend.com/)
