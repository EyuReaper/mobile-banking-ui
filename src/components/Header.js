import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-cyan-800 bg-opacity-60 text-white py-4 px-4 flex items-center rounded-full mt-6 justify-between">
            <Link to="/" className="flex items-center">
                <i className="fas fa-university mr-2"></i>
                Mobile Banking
            </Link>
            
            <Link to="/send-money" className="flex items-center">
                <i className="fas fa-paper-plane mr-2"></i>
                Send Money
            </Link>
        </header>
    );
};

export default Header;