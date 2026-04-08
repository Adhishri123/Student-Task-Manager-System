import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Login.css";

function Login({switchToRegister}) {
    const [form, setForm] = useState({
            emailId : "",
            password : "",
        });

        const [errors,setErrors] = useState({});

        //  Handle input change
        const handleChange = (e) => {
            setForm({ ...form, [e.target.name] : e.target.value });
        };

        //  Validation function
        const validate = () => {
            let newErrors = {};
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            
            // Email Id
            if(!form.emailId) {
                newErrors.emailId = "Email is required";
            }else if(!emailRegex.test(form.emailId)) {
                newErrors.emailId = "Invalid email format ... Correct format : john1@gmail.com";
            }
            // Password
            if(!form.password) {
                newErrors.password = "Password is required";
            }else if(!passwordRegex.test(form.password)) {
                newErrors.password = "Password must be 6+ chars, include at least 1 uppercase, at least 1 lowercase, at least 1 number & 1 special char";
            }

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };
    
        // Submit
        const handleSubmit = (e) => {
            e.preventDefault();
            if(validate()) {
                console.log("Login Success", form);
                
            }
        };
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-fields">
                        {/* <label>Email </label>&nbsp; */}
                        <input type="text" name="emailId" onChange={handleChange} placeholder="Enter your email" required></input>
                        <small className="error">{errors.emailId}</small>
                    </div>

                    <div className="input-fields">
                        {/* <label>Password </label>&nbsp; */}
                        <input type="password" name="password" onChange={handleChange} placeholder="Enter your password" required></input>
                        <small className="error">{errors.password}</small>
                    </div>

                    <button className="login-btn" type="submit">
                        Login
                    </button>

                    <h5>Don't have an account?<p onClick={switchToRegister} style={{cursor: "pointer"}}>
                        Go to Register
                    </p></h5>

                    {/* <p className="register-page-link">
                        Don't have an account?{" "} <Link to="/register">Register</Link>
                    </p> */}
                </form>
            </div>
        </div>
    );
}

export default Login;