import React from "react";

const Holidays = ({ holidays }) => {
  return (
    <div className="mt-10 flex flex-col gap-2">
      {holidays.map((holiday) => (
        <div key={holiday.id}>
          <span className="text-lg font-semibold">{holiday.user.email}</span> -{" "}
          {holiday.holidayDate}
        </div>
      ))}
    </div>
  );
};

export default Holidays;
