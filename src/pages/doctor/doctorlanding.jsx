import React, { useEffect } from "react";
import Navbar from "../../componats/navbar";
import SearchBar from "../../componats/searchbar";
import DoctorCard from "../../componats/fordoctorpage/doctorcard";
import Specialties from "../../componats/fordoctorpage/special";
import { useGlobalState } from "../../GlobalStateProvider"; // Ensure this path is correct

const DoctorLandingPage = () => {
  const { globalState, setGlobalState } = useGlobalState(); // Destructure the context

  const doctors = globalState.doctors;

  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    const myHeaders = new Headers();
    if (token) {
      myHeaders.append("Authorization", `Bearer ${token}`);
    }

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:9090/api/doctor/alldoctor", requestOptions)
      .then((response) => response.json())
      .then((result) => setGlobalState({ ...globalState, doctors: result }))
      .catch((error) => console.error(error));
  }, [token, setGlobalState, globalState]); // Include setGlobalState and globalState in dependencies

  return (
    <div>
      <div className="flex justify-evenly w-full pt-10">
        <SearchBar />
      </div>
      <div>
        <Specialties />
      </div>
      <DoctorCard doctors={doctors} />
    </div>
  );
};

export default DoctorLandingPage;