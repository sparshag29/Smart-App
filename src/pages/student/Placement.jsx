import React from "react";
import { placementResources } from "../../data";

function Placement() {
    return (
        <div className="page">
            <div className="page-header">
                <p className="small-title">
                    CAREER
                </p>
                <h1>
                    Placement
                </h1>
                <p>
                    Placement preparation and opportunities for eligible students.
                </p>
            </div>

            <div className="card-grid">
                {placementResources.map((resource) => (
                    <div className="content-card" key={resource.title}>
                        <span className="tag">
                            {resource.tag}
                        </span>
                        <h2>
                            {resource.title}
                        </h2>
                        <p>
                            {resource.description}
                        </p>
                        <button className="small-button" onClick={() => window.open(resource.url, "_blank")}>
                            {resource.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Placement;