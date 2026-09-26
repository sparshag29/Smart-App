import React from "react";
import { events } from "../../data";

function Events() {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    CAMPUS
                </p>
                <h1>
                    Events
                </h1>
                <p>
                    Upcoming college events and activities.
                </p>
            </div>

            <div className="card-grid">
                {events.map((event) => (
                    <div
                        className="content-card"
                        key={event.title}
                    >
                        <span className="date-text">
                            {event.date}
                        </span>
                        <h2>
                            {event.title}
                        </h2>
                        <p>
                            {event.description}
                        </p>
                        <button className="small-button" onClick={() => window.open(event.url, "_blank")}>
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
