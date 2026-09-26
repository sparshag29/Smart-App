import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function TeacherLayout({ user, logoutUser }) {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logoutUser();
        navigate("/");
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <button
                className="menu-button"
                onClick={() => setMenuOpen(true)}
            >
                ☰
            </button>

            {menuOpen && (
                <div
                    className="menu-overlay"
                    onClick={closeMenu}
                ></div>
            )}

            <div className="app-layout">
                <aside
                    className={`sidebar ${
                        menuOpen ? "sidebar-open" : ""
                    }`}
                >
                    <div className="brand">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOYaDjS0J5xWB7u1qUTP91nmwzh7zeIE_8CKe6GzJhwrRFCqWsVUh3U1O&s=10" className="brand-icon">
                        </img>

                        <div>
                            <strong>
                                Smart Portal
                            </strong>

                            <span>
                                Teacher
                            </span>
                        </div>
                    </div>

                    <nav className="navigation">
                        <NavLink
                            to="/teacher"
                            end
                            onClick={closeMenu}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/teacher/subjects"
                            onClick={closeMenu}
                        >
                            My Subjects
                        </NavLink>

                        <NavLink
                            to="/teacher/attendance"
                            onClick={closeMenu}
                        >
                            Attendance
                        </NavLink>

                        <NavLink
                            to="/teacher/notes"
                            onClick={closeMenu}
                        >
                            Notes & PPTs
                        </NavLink>

                        <NavLink
                            to="/teacher/exams"
                            onClick={closeMenu}
                        >
                            Exams & CAs
                        </NavLink>

                        <NavLink
                            to="/teacher/students"
                            onClick={closeMenu}
                        >
                            Students
                        </NavLink>
                    </nav>

                    <div className="sidebar-bottom">
                        <div className="user-mini">
                            <strong>
                                {user.name}
                            </strong>

                            <span>
                                {user.department}
                            </span>
                        </div>

                        <button
                            className="logout-button"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </aside>

                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default TeacherLayout;