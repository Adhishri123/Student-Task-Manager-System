import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register({switchToLogin}) {
    // const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault(); // stop reload

    //     alert("Registration Successful...!");
    //     setTimeout(() => {
    //         navigate("/"); // switch view
    //     }, 500);
        
    // };
    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Registration</h2>

                <form >
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

                    <h5>Already have an account?<p onClick={switchToLogin} style={{cursor: "pointer"}}>
                        Back to Login
                    </p></h5>

                    {/* <p className="login-page-link">
                        Already have an account?{" "}<Link to="/">Login</Link>
                    </p> */}
                </form>
            </div>
        </div>
    );
}

export default Register;