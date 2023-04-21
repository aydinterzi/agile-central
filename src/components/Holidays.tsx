import React from "react";

const Holidays = ({ holidays }) => {
  return (
    <div>
      {holidays.map((holiday) => (
        <div key={holiday.id}>
          {holiday.user.email} - {holiday.holidayDate}
        </div>
      ))}
    </div>
  );
};

export default Holidays;
