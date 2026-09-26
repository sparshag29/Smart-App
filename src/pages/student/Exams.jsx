import React from "react";
import { exams } from "../../data";

function Exams() {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    ACADEMICS
                </p>
                <h1>
                    Exams
                </h1>
                <p>
                    Check your upcoming examination schedule.
                </p>
                <button className="exam-button" onClick={() => window.open("https://kjsse-files.somaiya.edu/Time+Table+-+May-2026/19COE_+ESE+Examination+TT+MJ+2026_Rev303.pdf", "_blank")}>
                    View Schedule
                </button>
                <button className="exam-button" onClick={() => window.print()}>
                    Print Schedule
                </button>
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
