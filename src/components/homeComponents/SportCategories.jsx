import React from 'react';
// Importing icons from react-icons
import { MdSportsSoccer, MdSportsTennis, MdSportsCricket } from "react-icons/md";
import { TbPingPong } from "react-icons/tb";
import { BiSwim } from "react-icons/bi";

const SportCategories = () => {
    const sports = [
        { name: 'Football', Icon: MdSportsSoccer },
        { name: 'Tennis', Icon: MdSportsTennis },
        { name: 'Padel', Icon: TbPingPong },
        { name: 'Cricket', Icon: MdSportsCricket },
        { name: 'Swimming', Icon: BiSwim },
    ];

    return (
        <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <h2 className="text-xl md:text-2xl font-bold text-[#1a1f36] mb-6">
                Find Your Sport
            </h2>

            <div className="flex flex-wrap justify-center gap-4">

                {sports.map(({ name, Icon }) => (
                    <button
                        key={name}
                        className="shrink-0 w-fit md:w-full md:max-w-sm px-16 border border-gray-300 h-21.25 bg-white rounded-xl flex flex-col items-center justify-center gap-2"
                    >
                        <Icon className="w-6 h-6 text-[#3b4b43]" />

                        <span className="text-xs font-bold text-[#3b4b43]">
                            {name}
                        </span>
                    </button>
                ))}

            </div>
        </div>
    );
};

export default SportCategories;