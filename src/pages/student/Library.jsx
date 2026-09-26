import React from "react";
import { books } from "../../data";

function Library() {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    RESOURCES
                </p>
                <h1>
                    Library
                </h1>
                <p>
                    Browse useful books and learning resources.
                </p>
            </div>

            <div className="card-grid">
                {books.map((book) => (
                    <div
                        className="content-card"
                        key={book.name}
                    >
                        <div className="book-icon">
                            BK
                        </div>
                        <h2>
                            {book.name}
                        </h2>
                        <p>
                            Author: {book.author}
                        </p>
                        <button className="small-button" onClick={() => window.open(book.url, "_blank")}>
                            View Book
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Library;
