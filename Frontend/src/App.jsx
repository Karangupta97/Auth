import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Dashbord from "./pages/Dashbord";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import Loading from "./components/Loading.jsx";
import NotFound from "./pages/NotFound";


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user && !user.isverified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isverified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  const { isCheckingAuth, isAuthenticated, checkAuth, user } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <Loading />;
  console.log("isAuthenticated", isAuthenticated);
  console.log("user", user);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashbord"
          element={
            <ProtectedRoute>
              <Dashbord />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <Signup />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPassword />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/verify-email"
          element={
            <RedirectAuthenticatedUser>
              <VerifyEmail />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
