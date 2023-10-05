
function formatDateTime(type, localTime) {
  const date = new Date(localTime);

  const day = date.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });

  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = date.getMinutes();
  const period = date.getHours() >= 12 ? "PM" : "AM";

  if (isNaN(date)) {
    // If the date is invalid, return an empty string
    return "";
  }

  if (type === "date-time") {
    return `${day} ${dayOfMonth} ${month} ${hours}:${minutes} ${period}`;
  } else if (type === "date") {
    return `${day} ${dayOfMonth} ${month}`;
  }
  else if (type==="short-time"){
      return `${hours}${period}`
  }
  else {
      return `${hours} : ${minutes} ${period}`
  }
}

export default formatDateTime;

