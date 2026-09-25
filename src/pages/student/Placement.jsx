import React from "react";

function Placement() {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    CAREER
                </p>
                <h1>
                    Placement
                </h1>
                <p>
                    Placement preparation and opportunities for eligible students.
                </p>
            </div>

            <div className="card-grid">
                <div className="content-card">
                    <span className="tag">
                        Preparation
                    </span>
                    <h2>
                        Aptitude Practice
                    </h2>
                    <p>
                        Practice quantitative aptitude, logical reasoning and verbal ability.
                    </p>
                    <button className="small-button">
                        Start Practice
                    </button>
                </div>
                <div className="content-card">
                    <span className="tag">
                        Companies
                    </span>
                    <h2>
                        Placement Drives
                    </h2>
                    <p>
                        View upcoming company drives and their eligibility requirements.
                    </p>
                    <button className="small-button">
                        View Drives
                    </button>
                </div>
                <div className="content-card">
                    <span className="tag">
                        Career
                    </span>
                    <h2>
                        Resume Building
                    </h2>
                    <p>
                        Prepare your resume and improve your interview readiness.
                    </p>
                    <button className="small-button">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Placement;
