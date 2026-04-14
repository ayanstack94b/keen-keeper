import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">

            <h1 className="text-6xl md:text-8xl font-bold text-[#244d3f]">404</h1>

            <p className="mt-4 text-lg md:text-xl text-gray-600">
                Oops! The page you are looking for does not exist.
            </p>

            <Link to="/">
                <button className="mt-6 px-6 py-2 rounded text-white bg-[#244d3f] hover:bg-[#1b3a30] transition">
                    ← Back to Home
                </button>
            </Link>

        </div>
    );
};

export default ErrorPage;