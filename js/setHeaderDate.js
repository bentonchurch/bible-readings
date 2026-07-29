const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

function getDate() {
  let currentDate = new Date();
  let dayOfTheWeek = dayNames[currentDate.getDay()];
  let month = monthNames[currentDate.getMonth()];
  let day = currentDate.getDate();

  return `${dayOfTheWeek}, ${month} ${day}`;
}