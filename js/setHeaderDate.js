let months = [
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
let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let currentDate = new Date();

document.getElementById("curDate").innerText =
  day[currentDate.getDay()] +
  ", " +
  months[currentDate.getMonth()] +
  " " +
  currentDate.getDate();
