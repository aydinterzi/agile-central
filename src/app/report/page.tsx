"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const description = formData.get("description");
    const status = formData.get("status");

    const res = fetch("/api/report", {
      method: "POST",
      body: JSON.stringify({
        description,
        statusId: 1,
        sprintId: 1,
        userId: 1,
      }),
    });
    router.refresh();
  };

  return (
    <div className="h-full px-52 pt-10">
      <form
        className="flex flex-col items-center gap-6"
        onSubmit={handleSubmit}
      >
        <textarea
          name="description"
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        ></textarea>
        <select name="status" className="select select-bordered  w-full">
          <option disabled>Select Status</option>
          <option>Bug</option>
          <option>Opened</option>
        </select>
        <button className="btn btn-primary self-end">Submit</button>
      </form>
    </div>
  );
};

export default Page;
