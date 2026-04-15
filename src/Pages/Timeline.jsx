import React, { useContext } from 'react';
import { TimelineContext } from '../Context/TimelineContext';
import { MdArrowDropDown } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import { LuMessageSquareMore } from 'react-icons/lu';
import { IoVideocamSharp } from 'react-icons/io5';
import EmptyUi from './EmptyUi';

const Timeline = () => {
    const { interactions } = useContext(TimelineContext)
    console.log(interactions);
    const iconMap = {
        call: <TbPhoneCall className='text-green-600 bg-green-100 rounded-full p-3 shadow-md' size={55}/>,
        text: <LuMessageSquareMore className="text-blue-600 bg-blue-100 rounded-full p-3 shadow-md" size={55} />,
        video: <IoVideocamSharp className="text-purple-600 bg-purple-100 rounded-full p-3 shadow-md" size={55} />
    };
    if (interactions.length === 0) {
        return <EmptyUi />;
    }

    return (
        <div className='min-h-screen my-10 p-5'>
            <section className='mb-10'>
                <button className="btn px-20 shadow-sm green font-bold" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                    Filter timeline <MdArrowDropDown size={22} />
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                    <li className='text-gray-600 cursor-not-allowed opacity-50 hover:opacity-90 transition duration-200'>Newest (coming soon)</li>
                    <li className='text-gray-600 cursor-not-allowed opacity-50 hover:opacity-90 transition duration-200'>Oldest (coming soon)</li>
                </ul>
            </section>
            {
                interactions.map((item, i) => (
                    <div className='flex items-center justify-start gap-5 bg-white w-full p-5 shadow-sm rounded mb-4' key={i}>
                        <div className="">
                            {
                                iconMap[item.type]
                            }
                        </div>
                       <div className="">
                            <div className="flex items-center gap-1">
                                <p className='font-bold text-xl text-gray-600'>{item.type}</p>
                                <p className=' text-gray-500 font-semibold'>with {item.name}</p>
                            </div>
                            <p className='text-gray-500 font-bold'>{item.date}</p>
                       </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Timeline;