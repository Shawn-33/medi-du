import React, { useState } from "react";

const WeeklySchedule = () => {
  const [selectedDays, setSelectedDays] = useState([]); // Tracks selected days
  const [dayTimes, setDayTimes] = useState({}); // Object to store start/end times for each day
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Function to toggle day selection
  const toggleDaySelection = (day) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((d) => d !== day) // Remove day if already selected
        : [...prevSelectedDays, day] // Add day if not selected
    );
  };

  // Function to handle start time change for each day
  const handleStartTimeChange = (day, time) => {
    setDayTimes((prevDayTimes) => ({
      ...prevDayTimes,
      [day]: { ...prevDayTimes[day], startTime: time },
    }));
  };

  // Function to handle end time change for each day
  const handleEndTimeChange = (day, time) => {
    setDayTimes((prevDayTimes) => ({
      ...prevDayTimes,
      [day]: { ...prevDayTimes[day], endTime: time },
    }));
  };

  return (
    <div className="p-6 w-40p bg-white shadow-lg rounded-lg">
      {/* Day Selection */}
      <div className="grid grid-cols-7 gap-4 mb-6">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => toggleDaySelection(day)} // Toggle selection
            className={`py-2 px-1 border rounded-md text-xs font-medium ${
              selectedDays.includes(day)
                ? "bg-blue-100 text-blue-600 border-blue-600" // Highlight selected
                : "text-gray-600 border-gray-300"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Time Inputs for selected days */}
      {selectedDays.map((day) => (
        <div key={day} className="space-y-4 mb-4">
          <div className="flex items-center space-x-4">
            <label className="block text-sm font-medium text-gray-700">
              {`${day} Start Time`}
            </label>
            <input
              type="time"
              value={dayTimes[day]?.startTime || ""}
              onChange={(e) => handleStartTimeChange(day, e.target.value)}
              className="border rounded-md px-3 py-1 w-24"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label className="block text-sm font-medium text-gray-700">
              {`${day} End Time`}
            </label>
            <input
              type="time"
              value={dayTimes[day]?.endTime || ""}
              onChange={(e) => handleEndTimeChange(day, e.target.value)}
              className="border rounded-md px-3 py-1 w-24"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklySchedule;
