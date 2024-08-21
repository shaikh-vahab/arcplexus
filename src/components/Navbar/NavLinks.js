import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <>
            <HashLink
                className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
                smooth
                to="/#about"
            >
                About
            </HashLink>
            <div
                className="relative inline-block"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
            >
                <HashLink
                    className="px-4 font-extrabold text-gray-500 hover:text-blue-900 flex items-center cursor-pointer"
                    smooth
                    to="/#services"
                >
                    Services
                    <span className={`ml-1 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`}>
                        &#9660; {/* Down arrow (Unicode character) */}
                    </span>
                </HashLink>
                {isServicesOpen && (
                    <div className="absolute z-10 bg-white shadow-md rounded-md ">
                        <HashLink
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            to="/web-develop"
                        >
                            Web Development
                            <hr /> </HashLink>
                        <HashLink
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/App-develop">
                            Mobile App Development
                            <hr /> </HashLink>
                        <HashLink
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            to="/Domain-Hoisting">
                            Domain and Hosting
                            <hr /> </HashLink>
                        <HashLink
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            to="/#services">Services
                            <hr /></HashLink>
                    </div>
                )}
            </div>
            <HashLink
                className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
                to="/"
            >
                Portfolio
            </HashLink>
            <HashLink
                className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
                to="/contact#contact"
            >
                Contact Us
            </HashLink>
            <HashLink
                className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                smooth
                to="/get-demo#demo"
            >
                Demo our products
            </HashLink>
        </>
    );
};

export default NavLinks;
