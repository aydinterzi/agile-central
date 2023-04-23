import EnterHoliday from "@/components/EnterHoliday";
import Holidays from "@/components/Holidays";

export async function fetchHolidays() {
  const res = await fetch(`${process.env.BASE_FETCH_URL}api/holiday`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const holidays = await fetchHolidays();
  return (
    <div className="flex flex-col items-center">
      <EnterHoliday />
      <Holidays holidays={holidays} />
    </div>
  );
}
