import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import cir from "../assets/icons/circle.svg";
import userimg from "../assets/icons/user.svg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ set }) => {
    const [service, setService] = useState(["Health care", "Diagnosis", "Others"]);
    const [sr, setSr] = useState(service[0]); // Default selection
    const [ifShowSr, setIfShowSr] = useState(false);
    const nav = useNavigate();

    // Set default value in localStorage on initial render
    useEffect(() => {
        const defaultService = localStorage.getItem("ser") || service[0];
        localStorage.setItem("ser", defaultService); // Initialize if not set
        setSr(defaultService); // Update state with initial value
    }, [service]);

    const handleDropdownSelection = (item, index) => {
        localStorage.setItem("ser", item); // Update localStorage
        setSr(item); // Update state
        setIfShowSr(false); // Close dropdown
        set(item); // Notify the parent component of the change
    };

    return (
        <div className="pl-20 pr-20 pt-8">
            <div className="flex justify-between items-center pl-5 pr-5 bg-[#E1E1E1] shadow-md border border-gray-300 rounded-lg">
                <h1 className="text-custom-33 text-[#252B61] font-bold text-2xl">
                    Medcare
                </h1>

                <div className="flex justify-between items-center w-[40%]">
                    {/* Dropdown */}
                    <div className="relative flex justify-between items-center">
                        <p className="text-[#252B61] text-xl inline-block">
                            {sr}
                        </p>

                        <button onClick={() => setIfShowSr(!ifShowSr)} className="ml-2">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>

                        {ifShowSr && (
                            <ul className="absolute top-full mt-2 bg-white border border-gray-300 shadow-lg w-40 rounded-lg">
                                {service.map((item, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => handleDropdownSelection(item, index)}
                                            className="block px-4 py-2 text-left w-full hover:bg-gray-100 rounded-lg"
                                        >

                                            {item}


                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Offers */}
                    <div>
                        <button className="flex items-center ml-4">
                            <p className="text-[#ff5c00] mr-2">Offers</p>
                            <img src={cir} alt="circle icon" className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Sign Up */}
                    <div>
                        <button className="flex items-center ml-4" onClick={() => nav("/signup")}>
                            <p className="text-[#252B61] mr-2">Sign Up</p>
                        </button>
                    </div>

                    {/* Profile */}
                    <div>
                        <button className="flex items-center ml-4">
                            <p className="text-[#252B61] mr-2">Profile</p>
                            <img src={userimg} alt="circle icon" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
