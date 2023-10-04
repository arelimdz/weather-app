function formatDate(localTime) {
    const date = new Date(localTime);
  
    const day = date.toLocaleString("en-US", { weekday: "short" });
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
  
    if (isNaN(date)) {
      // If the date is invalid, return an empty string
      return "";
    }
  
    return `${day} ${dayOfMonth} ${month}`;
  }
  
  export default formatDate;
  