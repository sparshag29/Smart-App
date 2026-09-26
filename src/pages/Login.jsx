import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data";

function Login({ loginUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        setError("");

        const foundUser = users.find((user) => {
            return (
                user.email === email.trim().toLowerCase() &&
                user.password === password
            );
        });

        if (!foundUser) {
            setError("Invalid email or password.");
            return;
        }

        loginUser(foundUser);

        if (foundUser.role === "student") {
            navigate("/student");
        } else {
            navigate("/teacher");
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOYaDjS0J5xWB7u1qUTP91nmwzh7zeIE_8CKe6GzJhwrRFCqWsVUh3U1O&s=10" className="big-icon">
                </img>
                <p className="small-title">
                    SMART STUDENT PORTAL
                </p>
                <h1>
                    Welcome Back
                </h1>
                <p className="login-text">
                    One place for students and teachers
                </p>

                <form onSubmit={handleLogin}>
                    <label>
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        required
                    />

                    <label>
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter your password"
                        required
                    />

                    {error && (
                        <p className="error-text">
                            {error}
                        </p>
                    )}

                    <button
                        className="main-button"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <button
                        className="google-button"
                    >
                        <img className="google-icon" src="https://static.vecteezy.com/system/resources/previews/010/353/285/non_2x/colourful-google-logo-on-white-background-free-vector.jpg" alt="" />
                        <p>Sign In with Google</p>
                    </button>
                </form>

                <div className="login-demo">
                    <button className="demo-button" onClick={() => {
                        setEmail("student@portal.com");
                        setPassword("1234");
                    }}>
                        Student: student@portal.com / 1234
                    </button>
                    <button className="demo-button" onClick={() => {
                        setEmail("teacher@portal.com");
                        setPassword("1234");
                    }}>
                        Teacher: teacher@portal.com / 1234
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
