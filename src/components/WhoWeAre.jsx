// eslint-disable-next-line no-unused-vars
import React from 'react';

const WhoWeAre = () => {
    return (
        <div className="flex justify-center items-center py-10 bg-gray-100">
            <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                    <p className="text-3xl font-bold">14</p>
                    <p className="text-sm text-[#53ad97] ">Restaurants</p>
                </div>
                <div className="relative w-full max-w-md mx-auto mt-12">
                    <img 
                        src="https://img.freepik.com/premium-photo/restaurant-ritz-carlton-toronto_865967-25259.jpg?w=740" 
                        alt="Food Dish" 
                        className="block w-full h-auto" 
                    />
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold">08</p>
                    <p className="text-sm text-[#53ad97] ">Years Of Experience</p>
                </div>
                <div className="text-center -mt-6">
                    <p className="text-3xl font-bold">20</p>
                    <p className="text-sm text-[#53ad97] ">Chef In Kitchen</p>
                </div>
                <div></div>
                <div className="text-center -mt-6">
                    <p className="text-3xl font-bold">200</p>
                    <p className="text-sm text-[#53ad97] ">Food Dishes</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
