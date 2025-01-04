import React from "react";

const DoctorCard = () => {
  // Define the DoctorData class properly
  class DoctorData {
    constructor(name, specialty, experienceYears, img) {
      this.name = name;
      this.specialty = specialty;
      this.experienceYears = experienceYears;
      this.img = img;
    }
  }

  // Instantiate doctor objects properly using `new`
  const doctors = [
    new DoctorData(
      "Alu Khan",
      "Cardiology",
      "20 years",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgacademy.com%2Fboarding-school&psig=AOvVaw14ohmSn90Z5GiyBIX25b6w&ust=1732639391698000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjHme7294kDFQAAAAAdAAAAABAE"
    ),
    new DoctorData(
      "Jane Doe",
      "Pediatrics",
      "15 years",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgacademy.com%2Fboarding-school&psig=AOvVaw14ohmSn90Z5GiyBIX25b6w&ust=1732639391698000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjHme7294kDFQAAAAAdAAAAABAE"
    ),
    new DoctorData(
      "John Smith",
      "Orthopedics",
      "10 years",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgacademy.com%2Fboarding-school&psig=AOvVaw14ohmSn90Z5GiyBIX25b6w&ust=1732639391698000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjHme7294kDFQAAAAAdAAAAABAE"
    ),
    new DoctorData(
      "Emma Stone",
      "Dermatology",
      "8 years",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgacademy.com%2Fboarding-school&psig=AOvVaw14ohmSn90Z5GiyBIX25b6w&ust=1732639391698000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjHme7294kDFQAAAAAdAAAAABAE"
    ),
  ];

  const styles = {
    image: {
      width: "60px", // Set the size of the circle
      height: "60px", // Set the size of the circle
      borderRadius: "50%", // Makes the image circular
      objectFit: "cover", // Ensures the image covers the circle area without distortion
    },
  };

  return (
    <div>
      <ul>
        {doctors.map((item, index) => (
          <li key={index} className="pt-10 pb-10 pl-20 pr-10 ">
            <button
              onClick={() => {}}
              className="flex p-4 justify-between border border-gray-300 rounded-3xl "
              style={{ width: "100%", textAlign: "left" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Circular image */}
                <img src={item.img} alt={item.name} style={styles.image} />
                <div style={{ marginLeft: "10px" }}>
                  <div>{item.name}</div>
                  <div>{item.experienceYears}</div>
                </div>
              </div>

              {/* Specialty */}
              <div>{item.specialty}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorCard;
