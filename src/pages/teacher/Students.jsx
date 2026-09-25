import React from "react";
import { students } from "../../data";

function Students() {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    CLASS
                </p>
                <h1>
                    Students
                </h1>
                <p>
                    View students in your assigned classes.
                </p>
            </div>

            <div className="content-card table-card">
                <div className="simple-table">
                    <div className="table-row table-heading">
                        <span>
                            Roll No.
                        </span>
                        <span>
                            Student Name
                        </span>
                        <span>
                            Status
                        </span>
                    </div>
                    {students.map((student) => (
                        <div
                            className="table-row"
                            key={student.id}
                        >
                            <strong>
                                {student.rollNo}
                            </strong>
                            <span>
                                {student.name}
                            </span>
                            <span className="student-active">
                                Active
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Students;
