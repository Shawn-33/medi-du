import React, { useEffect, useState } from "react";

import cir from "../assets/icons/circle.svg";
import userimg from "../assets/icons/user.svg";
import { useNavigate } from "react-router-dom";

const NavbarForDoc = () => {
    
    const nav = useNavigate();

    // Set default value in localStorage on initial render

    return (
        <div className="pl-20 pr-20 pt-8">
            <div className="flex justify-between items-center pl-5 pr-5 bg-[#E1E1E1] shadow-md border border-gray-300 rounded-lg">
                <h1 className="text-custom-33 text-[#252B61] font-bold text-2xl">
                    Medcare
                </h1>

                <div className="flex justify-between items-center w-[40%]">
                    
                    <div>
                        <button className="flex items-center ml-4">
                            <p className="text-[#ff5c00] mr-2">Home</p>
                            <img src={cir} alt="circle icon" className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Sign Up */}
                    <div>
                        <button className="flex items-center ml-4">
                            <p className="text-[#252B61] mr-2">Patient</p>
                        </button>
                    </div>

                    {/* Profile */}
                    <div>
                        <button className="flex items-center ml-4">
                            <p className="text-[#252B61] mr-2"></p>
                            <img src={userimg} alt="circle icon" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarForDoc;
