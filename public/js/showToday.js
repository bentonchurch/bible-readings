function showToday() {
  let bookList = "";
  for (let i = 0; i < lists.length; i++) {
    bookList += "<li>" + lists[i].start + "</li>";
  }

  document.getElementById("todayContent").innerHTML = bookList;
}

showToday();