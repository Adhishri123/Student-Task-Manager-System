import React from "react";

function DashboardContent() {
    return (
        <div className="dashboard-content">
            <h1>Welcome to Dashboard</h1>

            <div className="cards">
                <div className="card">
                    <h3>Total Tasks</h3>
                    <p>10</p>
                </div>

                <div className="card">
                    <h3>Completed Tasks</h3>
                    <p>5</p>
                </div>

                <div className="card">
                    <h3>Pending Tasks</h3>
                    <p>5</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardContent;