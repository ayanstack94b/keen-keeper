import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router';


const Footer = () => {
    return (
        <footer className="bg-[#244d3f] text-white pt-16 pb-6">

            {/* Top Section */}
            <div className="text-center space-y-8 px-4">
                <NavLink to={'/'}>
                    <h1 className="text-5xl md:text-6xl font-bold">KeenKeeper</h1>
                </NavLink>


                <p className="text-sm text-gray-300 max-w-xl mx-auto mt-5">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <p className="text-xl font-bold text-white">Social Links</p>

                {/* Icons */}
                <div className="flex justify-center gap-4">

                    <a
                        href="https://www.linkedin.com/in/ayon-banerjee-475769340/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition"
                    >
                        <FaLinkedin size={16} />

                    </a>

                    <a
                        href="https://www.instagram.com/syntax_bree/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition"
                    >
                        <FaInstagram size={16} />
                    </a>

                    <a
                        href="https://www.facebook.com/debug.diaries.2024/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition"
                    >
                        <FaFacebookF size={16} />
                    </a>

                </div>
            </div>


            <div className="border-t border-gray-500 opacity-30 my-10"></div>

            {/* Bottom  */}
            <div className="flex flex-col md:flex-row justify-between items-center px-6 text-sm text-gray-300 gap-3">
                <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>

                <div className="flex gap-6">
                    <p className="hover:underline cursor-pointer">Privacy Policy</p>
                    <p className="hover:underline cursor-pointer">Terms of Service</p>
                    <p className="hover:underline cursor-pointer">Cookies</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;