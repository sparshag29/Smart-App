import React from "react";
import { exams } from "../../data";

function Exams() {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    ASSESSMENT
                </p>
                <h1>
                    Exams & CAs
                </h1>
                <p>
                    Manage your examination and continuous assessment schedule.
                </p>
            </div>

            <div className="content-card table-card">
                <div className="simple-table">
                    <div className="table-row table-heading">
                        <span>
                            Subject
                        </span>
                        <span>
                            Date
                        </span>
                        <span>
                            Time
                        </span>
                    </div>
                    {exams.map((exam) => (
                        <div
                            className="table-row"
                            key={exam.subject}
                        >
                            <strong>
                                {exam.subject}
                            </strong>
                            <span>
                                {exam.date}
                            </span>
                            <span>
                                {exam.time}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Exams;
