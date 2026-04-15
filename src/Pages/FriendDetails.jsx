import React, { useContext } from 'react';
import { BiSolidArchive } from 'react-icons/bi';
import { IoVideocamSharp } from 'react-icons/io5';
import { LuMessageSquareMore } from 'react-icons/lu';
import { MdDeleteOutline } from 'react-icons/md';
import { RiNotificationSnoozeFill } from 'react-icons/ri';
import { TbPhoneCall } from 'react-icons/tb';
import { useLoaderData } from 'react-router';
import { TimelineContext } from '../Context/TimelineContext';


const FriendDetails = () => {
    const friend = useLoaderData();
    const { interactions, addInteraction } = useContext(TimelineContext)
    console.log( interactions);

    const statusStyles = {
        "on-track": "bg-green-500 text-white",
        "almost due": "bg-yellow-400 text-black",
        "overdue": "bg-red-500 text-white"
    };

    const {
        bio,
        email,
        name,
        goal,
        days_since_contact: daysSinceContact,
        next_due_date: nextDueDate,
        picture,
        status,
        tags,
    } = friend;

    return (
        <div className='min-h-screen mt-10'>
            {/* main div */}
            <section className="flex lg:flex-row md:flex-col flex-col justify-center gap-5 p-6 space-y-3">

                {/*================================ Left div ====================================== */}
                <div className="flex flex-4 bg-white p-5  rounded shadow-sm flex-col items-center text-center space-y-3">
                    <div className="">
                        <img
                            className="rounded-full w-24 md:w-28 lg:w-32 aspect-square object-cover cursor-pointer hover:shadow-lg transition"
                            src={picture}
                            alt={name}
                        />
                    </div>
                    <p className="font-bold">{name}</p>
                    <div className="text-center">
                        <p className={`badge overflow-hidden cursor-pointer hover:shadow-lg transition rounded-full px-4 py-1 ${statusStyles[status]}`}>{status}</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        {
                            tags?.map((tag, i) => < span key={i} className='bg-green-200 text-xs p-3 rounded-full badge overflow-hidden  cursor-pointer hover:shadow-lg transition'>{tag}</span>)
                        }
                    </div>
                    {/* bio and email div */}
                    <div className="max-w-sm">
                        <p className="overflow-hidden text-gray-400 font-bold italic text-xs">"{bio}"</p>
                        <p className="overflow-hidden text-xs text-gray-400 italic">Preferred: {email}</p>
                    </div>

                    {/* static divs */}
                    <div className="space-y-5 w-full mt-5">
                        {/* div1 */}
                        <div className="bg-white flex justify-center items-center gap-3 p-1 shadow-sm w-full cursor-pointer hover:shadow-lg transition">
                            <RiNotificationSnoozeFill /><p className="">Snooze 2 weeks</p>
                        </div>
                        {/* div2 */}
                        <div className="bg-white flex justify-center items-center p-1 gap-3 shadow-sm w-full cursor-pointer hover:shadow-lg transition">
                            <BiSolidArchive /><p className="">Archive</p>
                        </div>
                        {/* div3 */}
                        <div className="bg-white flex justify-center items-center p-1 gap-3 shadow-sm w-full cursor-pointer hover:shadow-lg transition">
                            <MdDeleteOutline className='text-red-500' /><p className="text-red-500 font-light">Delete</p>
                        </div>
                    </div>
                </div>

                {/*================================ Right div ====================================== */}
                <div className="flex-8 space-y-10">

                    {/* card div */}
                    <div className="flex lg:flex-row md:flex-row flex-col justify-center w-full items-center gap-4 ">
                        {/* dynamic card 1 */}
                        <div className="bg-white w-full shadow-sm p-5 text-center cursor-pointer hover:shadow-lg transition">
                            <h1 className="font-bold text-2xl green">{daysSinceContact}</h1>
                            <p className="text-gray-600 overflow-clip">Days since Contact</p>
                        </div>
                        {/* dynamic card 2 */}
                        <div className="bg-white w-full shadow-sm p-5 text-center cursor-pointer hover:shadow-lg transition">
                            <h1 className="font-bold text-2xl green">{goal}</h1>
                            <p className="text-gray-600 overflow-clip">Goal (Days)</p>
                        </div>
                        {/* dynamic card 3 */}
                        <div className="bg-white w-full shadow-sm p-5 text-center cursor-pointer hover:shadow-lg transition">
                            <h1 className="font-bold text-2xl green">{nextDueDate}</h1>
                            <p className="text-gray-600 overflow-clip">Next Due</p>
                        </div>
                    </div>

                    {/* div 2 */}
                    <div className="flex justify-between items-center bg-white p-6 shadow-sm cursor-pointer hover:shadow-lg transition">
                        <div className="space-y-6">
                            <h2 className="text-gray-600 font-bold text-lg md:text-2xl lg:text-3xl">RelationShip Goals</h2>
                            <p className="text-gray-600 lg:text-xl md:text-lg text-xs">Connect every {daysSinceContact} days</p>
                        </div>
                        <button className="btn">Edit</button>
                    </div>


                    {/* div 3 Quick Check in */}

                    <div className="bg-white p-5 ">
                        {/* dynamic cards */}
                        <h2 className="font-bold text-gray-700 text-lg">Quick Check-In</h2>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 p-3 ">
                            {/* call card */}
                            <div onClick={() => addInteraction("call", name)} className="text-center flex flex-col items-center justify-center h-20 bg-base-200 shadow-sm cursor-pointer hover:shadow-lg transition">
                                <TbPhoneCall />
                                <p className="font-semibold">Call</p>
                            </div>
                            {/* Text card */}
                            <div onClick={() => addInteraction("text", name)} className="text-center flex flex-col items-center justify-center h-20 bg-base-200 shadow-sm cursor-pointer hover:shadow-lg transition">
                                <LuMessageSquareMore />
                                <p className="font-semibold">Text</p>
                            </div>
                            {/* Video card */}
                            <div onClick={() => addInteraction("video", name)} className="text-center flex flex-col items-center justify-center h-20 bg-base-200 shadow-sm cursor-pointer hover:shadow-lg transition">
                                <IoVideocamSharp />
                                <p className="font-semibold">Video</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default FriendDetails;