import React from "react";

function Subjects({ user }) {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    TEACHING
                </p>
                <h1>
                    My Subjects
                </h1>
                <p>
                    These are the subjects assigned to you.
                </p>
            </div>

            <div className="card-grid">
                {user.subjects.map((subject) => (
                    <div
                        className="content-card"
                        key={subject}
                    >
                        <div className="book-icon">
                            SB
                        </div>
                        <h2>
                            {subject}
                        </h2>
                        <p>
                            Computer Engineering
                        </p>
                        <button className="small-button">
                            Open Subject
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Subjects;
