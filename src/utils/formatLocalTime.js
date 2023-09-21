function formatLocalTime(localTime) {
    const date = new Date(localTime);
  
    const day = date.toLocaleString("en-US", { weekday: "short" });
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = date.getMinutes();
    const period = date.getHours() >= 12 ? "p.m." : "a.m.";
  
    return `${day} ${dayOfMonth} ${month} ${hours}:${minutes} ${period}`;
  }
  
  export { formatLocalTime };