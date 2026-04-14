import React from 'react';

const FriendCard = ({ friend }) => {

    // console.log('from friend card', friend);
    const statusStyles = {
        "on-track": "bg-green-500 text-white",
        "almost due": "bg-yellow-400 text-black",
        "overdue": "bg-red-500 text-white"
    };

    const handleDynamicCard = (id) => {
        console.log('dynamic id', id);
    }

    const {
        id,
        name,
        picture,
        days_since_contact: daysSinceContact,
        status,
        tags,
    } = friend;

    return (
        <div onClick={() => handleDynamicCard(id)}>

            {/* card */}
            <div className="bg-white shadow-sm text-center flex flex-col space-y-5 p-8 rounded">
                <div className="flex justify-center">
                    <img
                        className="rounded-full w-24 md:w-28 lg:w-32 aspect-square object-cover"
                        src={picture}
                        alt={name}
                    />
                </div>
                <p className="font-bold">{name}</p>
                <p className="font-light text-gray-400">{daysSinceContact}d ago</p>
                <div className="flex justify-center items-center gap-4">
                    {
                        tags.map((tag, i) => < span key={i} className='bg-green-200 text-xs p-3 rounded-full badge overflow-hidden '>{tag}</span>)
                    }
                </div>
                <div className="text-center">
                    <p className={`badge overflow-hidden rounded-full px-4 py-1 ${statusStyles[status]}`}>{status}</p>
                </div>
            </div>

        </div>
    );
};

export default FriendCard;