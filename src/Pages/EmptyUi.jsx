import React from 'react';
import { TbPhoneCall } from 'react-icons/tb';
import { Link } from 'react-router';

const EmptyUi = () => {
    return (
        <div>
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">

                <div className="bg-[#e6f2ee] p-6 rounded-full">
                    <TbPhoneCall className="text-[#244d3f]" size={40} />
                </div>

                <h2 className="text-xl font-semibold text-gray-700">
                    No interactions yet
                </h2>

                <p className="text-gray-500 max-w-sm">
                    Start connecting with your friends. Your calls, texts, and video chats will appear here.
                </p>

                <Link to="/" className="btn bg-[#244d3f] text-white mt-2">
                    Go to Friends
                </Link>

            </div>
        </div>
    );
};

export default EmptyUi;