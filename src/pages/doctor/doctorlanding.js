import React from "react";
import Navbar from "../../componats/navbar";
import SearchBar from "../../componats/searchbar";
import DoctorCard from "../../componats/fordoctorpage/doctorcard";
import Specialties from "../../componats/fordoctorpage/special";

const DoctorLandingPage = () => {
  return (
    <div>
        <div className="flex justify-evenly w-full pt-10">
            <SearchBar></SearchBar>
        </div>
        <div>
            <Specialties></Specialties>
        </div>
         <DoctorCard></DoctorCard> 
    </div>
  );
};

export default DoctorLandingPage;
