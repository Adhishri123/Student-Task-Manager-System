import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>

                <form>
                    <div className="input-fields">
                        <label>Email </label>&nbsp;
                        <input type="email" placeholder="Enter your email" required></input>
                    </div>

                    <div className="input-fields">
                        <label>Password </label>&nbsp;
                        <input type="password" placeholder="Enter your password" required></input>
                    </div>

                    <button className="login-btn" type="submit">
                        Login
                    </button>
                    <p className="register-page-link">
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;