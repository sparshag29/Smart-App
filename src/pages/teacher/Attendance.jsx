import React, { useState } from "react";
import { lectures, students } from "../../data";

function Attendance({ user }) {
    const teacherLectures = lectures.filter((lecture) => {
        return (
            user.subjects.includes(lecture.subject) &&
            lecture.teacher === user.name
        );
    });

    const [selectedLecture, setSelectedLecture] = useState(teacherLectures[0]);
    const [attendance, setAttendance] = useState({
        1: "present",
        2: "absent",
        3: "present",
        4: "absent",
        5: "present"
    });
    const [message, setMessage] = useState("");

    const selectLecture = (lecture) => {
        setSelectedLecture(lecture);
        setMessage("");
    };

    const toggleAttendance = (studentId) => {
        const newStatus = attendance[studentId] === "present"
            ? "absent"
            : "present";

        setAttendance({
            ...attendance,
            [studentId]: newStatus
        });
        setMessage("");
    };

    const submitAttendance = () => {
        setMessage("Attendance submitted successfully.");
    };

    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    TEACHER PORTAL
                </p>
                <h1>
                    Attendance
                </h1>
                <p>
                    Select a lecture and mark attendance for students.
                </p>
            </div>

            <div className="teacher-attendance">
                <div className="content-card lecture-panel">
                    <h2>
                        My Lectures
                    </h2>
                    {teacherLectures.map((lecture) => (
                        <button
                            className={selectedLecture.id === lecture.id ? "teacher-lecture active" : "teacher-lecture"}
                            key={lecture.id}
                            onClick={() => selectLecture(lecture)}
                        >
                            <strong>
                                {lecture.subject}
                            </strong>
                            <span>
                                {lecture.date}
                            </span>
                            <span>
                                {lecture.startTime}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="content-card attendance-panel">
                    {selectedLecture && (
                        <>
                            <h2>
                                {selectedLecture.subject}
                            </h2>
                            <p>
                                {selectedLecture.date} · {selectedLecture.startTime} - {selectedLecture.endTime}
                            </p>

                            <div className="attendance-list">
                                {students.map((student) => (
                                    <div
                                        className="student-attendance"
                                        key={student.id}
                                    >
                                        <div>
                                            <strong>
                                                {student.name}
                                            </strong>
                                            <span>
                                                {student.rollNo}
                                            </span>
                                        </div>

                                        <button
                                            className={attendance[student.id] === "present" ? "attendance-button present" : "attendance-button absent"}
                                            onClick={() => toggleAttendance(student.id)}
                                        >
                                            {attendance[student.id] === "present" ? "Present" : "Absent"}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="attendance-bottom">
                                <span>
                                    Present: {Object.values(attendance).filter((status) => status === "present").length} / {students.length}
                                </span>
                                <button
                                    className="main-button"
                                    onClick={submitAttendance}
                                >
                                    Submit Attendance
                                </button>
                            </div>

                            {message && (
                                <p className="success-text">
                                    {message}
                                </p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Attendance;
