import React from "react";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="logo">Task Manager</h2>

            <ul className="menu">
                <li>Dashboard</li>
                <li>Tasks</li>
                <li>Logout</li>
            </ul>
        </div>
    );
}

export default Sidebar;