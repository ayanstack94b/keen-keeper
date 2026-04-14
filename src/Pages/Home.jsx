import React from 'react';
import { useLoaderData } from 'react-router';
import FriendCard from '../Components/FriendCard/FriendCard';
import { GoPlus } from 'react-icons/go';


const Home = () => {
    const friends = useLoaderData()
    // console.log('friends data:', friends);
    return (
        <div className=''>
            {/* home static section */}
            <section className='text-center space-y-8 my-10'>
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Friends to keep close in your life</h1>
                <p className="text-sm text-gray-600 max-w-md mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>

                <button className=" btn bg-[#244d3f] text-white px-4 py-1"><GoPlus size={20} />
                    Add a Friend</button>
            </section>

            {/* static cards */}
            <section className='max-w-4xl mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3">
                    {/* card-1 */}
                    <div className="bg-white shadow-md border-0 rounded p-5 text-center">
                        <h1 className="font-bold green text-2xl ">{friends.length}</h1>
                        <p className="text-gray-500 font-semibold overflow-hidden">Total Friends</p>
                    </div>
                    {/* card-2 */}
                    <div className="bg-white shadow-md border-0 rounded p-5 text-center">
                        <h1 className="font-bold green text-2xl">3</h1>
                        <p className="text-gray-500 font-semibold overflow-hidden">On Track</p>
                    </div>
                    {/* card-3 */}
                    <div className="bg-white shadow-md border-0 rounded p-5 text-center">
                        <h1 className="font-bold green text-2xl">6</h1>
                        <p className="text-gray-500 font-semibold overflow-hidden">Need Attention</p>
                    </div>
                    {/* card-4 */}
                    <div className="bg-white shadow-md border-0 rounded p-5 text-center">
                        <h1 className="font-bold green text-2xl">12</h1>
                        <p className="text-gray-500 font-semibold overflow-hidden">Interactions This Month</p>
                    </div>
                </div>
            </section>

            <div className="border border-t opacity-8 my-20 ">
            </div>

            {/* Dynamic data cards */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto p-4 ">
                    <h1 className="font-bold text-xl">Your Friends</h1>
                    {
                        friends.map((friend) => <FriendCard
                            key={friend.id}
                            friend={friend}
                        ></FriendCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;