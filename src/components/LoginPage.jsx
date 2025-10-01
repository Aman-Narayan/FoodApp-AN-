import React, { useState } from "react";
import Footer from "./Footer";
import HeadingComponent from "./Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/");
      // Here you can call API or handle login logic
    }
  };

  return (
    <>
      <HeadingComponent />
      <div className="login-page-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-heading">Login</h2>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="form-group password-group">
            <label className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          {/* Keep me logged in */}
          <div className="keep-logged-in">
            <input type="checkbox" className="checkbox" />
            <span>Keep me logged in</span>
          </div>

          {/* Button */}
          <button className="login-button">LOG IN</button>
          {/* Forgot password */}
          <p className="forgot-password-container">
            <a href="#" className="forgot-password-link">
              Forgot password?
            </a>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
