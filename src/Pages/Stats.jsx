import React, { useContext } from 'react';
import { TimelineContext } from '../Context/TimelineContext';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { TbMoodEmptyFilled } from 'react-icons/tb';

const colors = ["#244d3f", "#4ade80", "#60a5fa"];

const Stats = () => {
    const { interactions } = useContext(TimelineContext);

    const counts = {
        call: 0,
        text: 0,
        video: 0
    };

    interactions.forEach(item => {
        if (item.type === "call") counts.call++;
        else if (item.type === "text") counts.text++;
        else if (item.type === "video") counts.video++;
    });

    const data = [
        { name: "Call", value: counts.call },
        { name: "Text", value: counts.text },
        { name: "Video", value: counts.video }
    ];

    const total = counts.call + counts.text + counts.video;

    if (total === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
                <h2 className="">Oopps!! no interaction data yet </h2>
               <span className="">

                <TbMoodEmptyFilled size={30} className='text-green-800'/>
               </span>


            </div>
        );
    }

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center my-10">
            <h2 className="text-4xl font-bold mb-6">Friendship Analytics</h2>

            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={colors[index % colors.length]} />
                    ))}
                </Pie>

                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default Stats;