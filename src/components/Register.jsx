import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register({switchToLogin}) {
    // react routing :-
    // const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault(); // stop reload

    //     alert("Registration Successful...!");
    //     setTimeout(() => {
    //         navigate("/"); // switch view
    //     }, 500);
        
    // };

    // for validations :-
    const [form, setForm] = useState({
        fullName : "",
        emailId : "",
        password : "",
        confirmPassword : "",
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
        //  Full Name
        if(!form.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }
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
        // Confirm Password
        if(!form.confirmPassword) {
            newErrors.confirmPassword = "Confirm your password";
        }else if(form.password !== form.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
            console.log("Form Submitted", form);
            switchToLogin();//navigate back
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Registration</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-fields">
                        {/* <label>Full Name</label> */}
                        <input type="text" name="fullName" onChange={handleChange} placeholder="Enter your full name" required></input>
                        <small className="error">{errors.fullName}</small>
                    </div>
                    <div className="input-fields">
                        {/* <label>Email</label> */}
                        <input type="email" name="emailId" onChange={handleChange} placeholder="Enter your email ID" required></input>
                        <small className="error">{errors.emailId}</small>
                    </div>
                    <div className="input-fields">
                        {/* <label>Password</label> */}
                        <input type="password" name="password" onChange={handleChange} placeholder="Enter password" required></input>
                        <small className="error">{errors.password}</small>
                    </div>
                    <div className="input-fields">
                        {/* <label>Confirm Password</label> */}
                        <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm password" required></input>
                        <small className="error">{errors.confirmPassword}</small>
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