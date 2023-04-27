import React from "react";

const Report = ({ description }: { description: string }) => {
  return (
    <div className="flex">
      <p>{description}</p>
      <div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Delete
        </button>
        <button>Update</button>
      </div>
    </div>
  );
};

export default Report;
