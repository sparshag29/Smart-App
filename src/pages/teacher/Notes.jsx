import React from "react";
import { notes } from "../../data";

function Notes() {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    TEACHING MATERIAL
                </p>
                <h1>
                    Notes & PPTs
                </h1>
                <p>
                    Manage material for your subjects.
                </p>
            </div>

            <div className="card-grid">
                {notes.map((note) => (
                    <div
                        className="content-card"
                        key={note.title}
                    >
                        <span className="tag">
                            {note.type}
                        </span>
                        <h2>
                            {note.title}
                        </h2>
                        <p>
                            Subject: {note.subject}
                        </p>
                        <button className="small-button">
                            Manage Material
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notes;
