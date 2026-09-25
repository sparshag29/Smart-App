import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import StudentLayout from "./pages/student/StudentLayout";
import TeacherLayout from "./pages/teacher/TeacherLayout";
import StudentDashboard from "./pages/student/Dashboard";
import StudentEvents from "./pages/student/Events";
import StudentAttendance from "./pages/student/Attendance";
import StudentNotes from "./pages/student/Notes";
import StudentExams from "./pages/student/Exams";
import StudentLibrary from "./pages/student/Library";
import StudentPlacement from "./pages/student/Placement";
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherSubjects from "./pages/teacher/Subjects";
import TeacherAttendance from "./pages/teacher/Attendance";
import TeacherNotes from "./pages/teacher/Notes";
import TeacherExams from "./pages/teacher/Exams";
import TeacherStudents from "./pages/teacher/Students";

function App() {
    const [user, setUser] = useState(null);

    const loginUser = (loggedInUser) => {
        setUser(loggedInUser);
    };

    const logoutUser = () => {
        setUser(null);
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Login
                        user={user}
                        loginUser={loginUser}
                    />
                }
            />

            <Route
                path="/student"
                element={
                    user && user.role === "student" ? (
                        <StudentLayout
                            user={user}
                            logoutUser={logoutUser}
                        />
                    ) : (
                        <Navigate to="/" />
                    )
                }
            >
                <Route
                    index
                    element={<StudentDashboard user={user} />}
                />
                <Route
                    path="events"
                    element={<StudentEvents />}
                />
                <Route
                    path="attendance"
                    element={<StudentAttendance />}
                />
                <Route
                    path="notes"
                    element={<StudentNotes />}
                />
                <Route
                    path="exams"
                    element={<StudentExams />}
                />
                <Route
                    path="library"
                    element={<StudentLibrary />}
                />
                <Route
                    path="placement"
                    element={
                        user && user.year >= 3 ? (
                            <StudentPlacement />
                        ) : (
                            <Navigate to="/student" />
                        )
                    }
                />
            </Route>

            <Route
                path="/teacher"
                element={
                    user && user.role === "teacher" ? (
                        <TeacherLayout
                            user={user}
                            logoutUser={logoutUser}
                        />
                    ) : (
                        <Navigate to="/" />
                    )
                }
            >
                <Route
                    index
                    element={<TeacherDashboard user={user} />}
                />
                <Route
                    path="subjects"
                    element={<TeacherSubjects user={user} />}
                />
                <Route
                    path="attendance"
                    element={<TeacherAttendance user={user} />}
                />
                <Route
                    path="notes"
                    element={<TeacherNotes user={user} />}
                />
                <Route
                    path="exams"
                    element={<TeacherExams user={user} />}
                />
                <Route
                    path="students"
                    element={<TeacherStudents />}
                />
            </Route>

            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
}

export default App;
