"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Holidays = ({ holidays }) => {
  const { refresh } = useRouter();
  const handleDelete = async (id: number) => {
    console.log(id);
    const res = await fetch(`api/holiday/${id}`, {
      method: "DELETE",
    });
    refresh();
  };

  return (
    <div className="mt-10 flex flex-col gap-2">
      {holidays.map((holiday) => (
        <div className="flex items-center gap-2" key={holiday.id}>
          <span className="text-lg font-semibold">{holiday.user.email}</span> -{" "}
          {holiday.holidayDate}
          <div>
            <button
              onClick={() => handleDelete(holiday.id)}
              className="btn btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Holidays;
