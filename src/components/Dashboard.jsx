import React from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css"

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Sidebar></Sidebar>
            <DashboardContent></DashboardContent>
        </div>
    );
}

export default Dashboard;