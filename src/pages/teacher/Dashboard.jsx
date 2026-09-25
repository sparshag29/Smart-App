import React from "react";

function Dashboard({ user }) {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    TEACHER DASHBOARD
                </p>
                <h1>
                    Welcome, {user.name}
                </h1>
                <p>
                    Manage your subjects, attendance and academic work.
                </p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <span>
                        My Subjects
                    </span>
                    <strong>
                        {user.subjects.length}
                    </strong>
                    <p>
                        Assigned subjects
                    </p>
                </div>
                <div className="stat-card">
                    <span>
                        Students
                    </span>
                    <strong>
                        5
                    </strong>
                    <p>
                        Students in your classes
                    </p>
                </div>
                <div className="stat-card">
                    <span>
                        Lectures
                    </span>
                    <strong>
                        5
                    </strong>
                    <p>
                        This week
                    </p>
                </div>
                <div className="stat-card">
                    <span>
                        Department
                    </span>
                    <strong className="small-stat">
                        CE
                    </strong>
                    <p>
                        {user.department}
                    </p>
                </div>
            </div>

            <div className="content-card">
                <h2>
                    Assigned Subjects
                </h2>
                <div className="subject-list">
                    {user.subjects.map((subject) => (
                        <div
                            className="subject-item"
                            key={subject}
                        >
                            <strong>
                                {subject}
                            </strong>
                            <span>
                                Assigned to you
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
