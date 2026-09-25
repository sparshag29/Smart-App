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
                <div className="login-icon">
                    SP
                </div>
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
                </form>

                <div className="login-demo">
                    <p>
                        Student: student@portal.com / 1234
                    </p>
                    <p>
                        Teacher: teacher@portal.com / 1234
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
