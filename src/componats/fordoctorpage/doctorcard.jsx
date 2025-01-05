import React from "react";

const DoctorCard = ({ doctors }) => {
  const styles = {
    image: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover",
    },
  };

  return (
    <div>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id} className="pt-10 pb-10 pl-20 pr-10">
            <button
              onClick={() => {}}
              className="flex p-4 justify-between border border-gray-300 rounded-3xl"
              style={{ width: "100%", textAlign: "left" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  style={styles.image}
                />
                <div style={{ marginLeft: "10px" }}>
                  <div>{doctor.name}</div>
                  <div>{doctor.expertise}</div>
                </div>
              </div>
              <div>{doctor.expertise}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorCard;