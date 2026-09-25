import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function StudentLayout({ user, logoutUser }) {
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
                        <div className="brand-icon">
                            SP
                        </div>

                        <div>
                            <strong>
                                Smart Portal
                            </strong>

                            <span>
                                Student
                            </span>
                        </div>
                    </div>

                    <nav className="navigation">
                        <NavLink
                            to="/student"
                            end
                            onClick={closeMenu}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/student/events"
                            onClick={closeMenu}
                        >
                            Events
                        </NavLink>

                        <NavLink
                            to="/student/attendance"
                            onClick={closeMenu}
                        >
                            My Scheduler
                        </NavLink>

                        <NavLink
                            to="/student/notes"
                            onClick={closeMenu}
                        >
                            Notes & PPTs
                        </NavLink>

                        <NavLink
                            to="/student/exams"
                            onClick={closeMenu}
                        >
                            Exams
                        </NavLink>

                        <NavLink
                            to="/student/library"
                            onClick={closeMenu}
                        >
                            Library
                        </NavLink>

                        {user.year >= 3 && (
                            <NavLink
                                to="/student/placement"
                                onClick={closeMenu}
                            >
                                Placement
                            </NavLink>
                        )}
                    </nav>

                    <div className="sidebar-bottom">
                        <div className="user-mini">
                            <strong>
                                {user.name}
                            </strong>

                            <span>
                                {user.year}rd Year · {user.branch}
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

export default StudentLayout;