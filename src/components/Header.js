import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import feather from 'feather-icons'; // Import feather-icons

const Header = () => {
    const location = useLocation();
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    return (
        <header className="bg-cyan-800 bg-opacity-60 text-white py-6 px-4 flex items-center rounded mt-0 justify-between">
            <Link to="/" className="flex items-center ">
                <i className="fas fa-university mr-2"></i>
                Mobile Banking
            </Link>
            
            <div className="relative">
                <button onClick={toggleNotifications} className="flex items-center bg-transparent border-0 rounded">
                    <i data-feather="bell" className="mr-2"></i>
                </button>
                {showNotifications && (
                    <div className="absolute right-0 mt-2 w-48 bg-cyan-800 bg-opacity-80 text-white rounded shadow-lg p-2">
                        <h3 className="font-bold mb-2">Notifications</h3>
                        <p>You have no new notifications.</p>
                        {/* Add your notification items here */}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;