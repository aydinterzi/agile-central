"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [statuses, setStatuses] = useState([]);
  useEffect(() => {
    const res = fetch("/api/status")
      .then((r) => r.json())
      .then((r) => setStatuses(r));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const description = formData.get("description");
    const status = +formData.get("status");
    const res = fetch("/api/report", {
      method: "POST",
      body: JSON.stringify({
        description,
        status,
        sprintId: 1,
        userId: auth.id,
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
          {statuses.map((status) => (
            <option key={status.id} value={status.id}>
              {status.name}
            </option>
          ))}
        </select>
        <button className="btn btn-primary self-end">Submit</button>
      </form>
    </div>
  );
};

export default Page;
