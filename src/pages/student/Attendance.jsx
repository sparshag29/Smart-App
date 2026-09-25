import React, { useState } from "react";
import { lectures } from "../../data";

function Attendance() {
    const [selectedLecture, setSelectedLecture] = useState(null);

    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    ATTENDANCE
                </p>
                <h1>
                    My Scheduler
                </h1>
                <p>
                    View your lectures, timings and attendance status.
                </p>
            </div>

            <div className="content-card">
                <div className="schedule-header">
                    <h2>
                        September 13 - 19, 2026
                    </h2>
                    <button className="small-button">
                        Today
                    </button>
                </div>

                <div className="schedule-list">
                    {lectures.map((lecture) => (
                        <button
                            className="lecture-item"
                            key={lecture.id}
                            onClick={() => setSelectedLecture(lecture)}
                        >
                            <div className="lecture-date">
                                <strong>
                                    {lecture.day}
                                </strong>
                                <span>
                                    {lecture.date}
                                </span>
                            </div>

                            <div className="lecture-info">
                                <strong>
                                    {lecture.subject}
                                </strong>
                                <span>
                                    {lecture.startTime} - {lecture.endTime}
                                </span>
                                <span>
                                    {lecture.type} · {lecture.room}
                                </span>
                            </div>

                            <span className={lecture.status === "present" ? "status present" : "status absent"}>
                                {lecture.status === "present" ? "Present" : "Absent"}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {selectedLecture && (
                <div
                    className="modal-background"
                    onClick={() => setSelectedLecture(null)}
                >
                    <div
                        className="modal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="close-button"
                            onClick={() => setSelectedLecture(null)}
                        >
                            X
                        </button>
                        <p className="small-title">
                            LECTURE DETAILS
                        </p>
                        <h2>
                            {selectedLecture.subject}
                        </h2>
                        <p>
                            <strong>
                                Date:
                            </strong>{" "}
                            {selectedLecture.date}
                        </p>
                        <p>
                            <strong>
                                Time:
                            </strong>{" "}
                            {selectedLecture.startTime} - {selectedLecture.endTime}
                        </p>
                        <p>
                            <strong>
                                Type:
                            </strong>{" "}
                            {selectedLecture.type}
                        </p>
                        <p>
                            <strong>
                                Room:
                            </strong>{" "}
                            {selectedLecture.room}
                        </p>
                        <p>
                            <strong>
                                Teacher:
                            </strong>{" "}
                            {selectedLecture.teacher}
                        </p>
                        <p>
                            <strong>
                                Attendance:
                            </strong>{" "}
                            {selectedLecture.status === "present" ? "Present" : "Absent"}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Attendance;
