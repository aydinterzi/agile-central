export function setCurrentTime(date: Date) {
  const now = new Date();
  date.setHours(
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
    now.getMilliseconds()
  );
  return date;
}
