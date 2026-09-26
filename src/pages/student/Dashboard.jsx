import React from "react";

function Dashboard({ user }) {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    STUDENT DASHBOARD
                </p>
                <h1>
                    Hello, {user.name}
                </h1>
                <p>
                    Here is your college activity at a glance.
                </p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <span>
                        Attendance
                    </span>
                    <strong>
                        82%
                    </strong>
                    <p>
                        Overall attendance
                    </p>
                </div>
                <div className="stat-card">
                    <span>
                        Upcoming Exams
                    </span>
                    <strong>
                        3
                    </strong>
                    <p>
                        Exams this month
                    </p>
                </div>
                <div className="stat-card">
                    <span>
                        Subjects
                    </span>
                    <strong>
                        6
                    </strong>
                    <p>
                        Current semester
                    </p>
                </div>
                <div className="stat-card">
                    <span>
                        Year
                    </span>
                    <strong>
                        {user.year}
                    </strong>
                    <p>
                        {user.branch}
                    </p>
                </div>
            </div>

            <div className="content-card">
                <h2>
                    Information
                </h2>
                <div className="info-grid">
                    <div>
                        <span>
                            Name
                        </span>
                        <strong>
                            {user.name}
                        </strong>
                    </div>
                    <div>
                        <span>
                            Email
                        </span>
                        <strong>
                            {user.email}
                        </strong>
                    </div>
                    <div>
                        <span>
                            Branch
                        </span>
                        <strong>
                            {user.branch}
                        </strong>
                    </div>
                    <div>
                        <span>
                            Year
                        </span>
                        <strong>
                            {user.year}rd Year
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
