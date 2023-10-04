
function formatDateTime(localTime) {
  const date = new Date(localTime);

  const day = date.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });

  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = date.getMinutes();
  const period = date.getHours() >= 12 ? "p.m." : "a.m.";

  if (isNaN(date)) {
    // If the date is invalid, return an empty string
    return "";
  }

  if (localTime.includes(":")) {
    // If the localTime contains a colon (":"), it's a date with time
    return `${day} ${dayOfMonth} ${month} ${hours}:${minutes} ${period}`;
  } else {
    // Otherwise, it's just a date
    return `${day} ${dayOfMonth} ${month}`;
  }
}

export default formatDateTime;