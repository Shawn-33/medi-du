import React, { useState, useEffect } from "react";
import Navbar from "../componats/navbar";
import LandingPage from "../componats/landing";
import DoctorLandingPage from "./doctor/doctorlanding";
import NavbarForDoc from "../componats/navbarfordoctor";

const Home = () => {
    const [alu, setAlu] = useState(localStorage.getItem("ser") || "Health care");

    const [role,setRole] = useState("1")

    useEffect(() => {
        // Re-run this effect whenever `alu` changes
        setAlu(localStorage.getItem("ser"));
    }, [alu]);

    useEffect(() => {
        
        setRole("Patient")
    }, [role]);

    return (
        <div>
            {role==="Patient" && <Navbar set={setAlu} />}
            {role==="Doctor"&& <NavbarForDoc></NavbarForDoc>}
            {alu === "Health care" && <LandingPage />}
            {alu === "Others" && <DoctorLandingPage />}
        </div>
    );
};

export default Home;
