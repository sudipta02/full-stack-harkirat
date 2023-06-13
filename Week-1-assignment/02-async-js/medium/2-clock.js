// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
/*
Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */

function getTime() {
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  const time24h = `${hours}:${minutes}:${seconds}`;
  const time12h = `${hours % 12 || 12}:${minutes}:${seconds} ${ampm}`;

  return {
    time24h,
    time12h,
  };
}

function updateTime() {
  const { time24h, time12h } = getTime();
  console.log(`Time (24h format): ${time24h}`);
  console.log(`Time (12h format): ${time12h}`);
}

// Update time every second
setInterval(updateTime, 1000);
