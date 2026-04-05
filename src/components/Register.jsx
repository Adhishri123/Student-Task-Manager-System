import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Registration</h2>

                <form>
                    <div className="input-fields">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your full name" required></input>
                        <small className="error">{/* Error placeholder */}</small>
                    </div>
                    <div className="input-fields">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email ID" required></input>
                        <small className="error"></small>
                    </div>
                    <div className="input-fields">
                        <label>Password</label>
                        <input type="password" placeholder="Enter password" required></input>
                        <small className="error"></small>
                    </div>
                    <div className="input-fields">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm password" required></input>
                        <small className="error"></small>
                    </div>

                    <button type="submit" className="register-btn">
                        Register
                    </button>

                    <p className="login-page-link">
                        Already have an account?{" "}<Link to="/">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;