let bookList = "";
for (let i = 0; i < lists.length; i++) {
  bookList += "<li>" + calculateBook(i) + "</li>";
}

document.getElementById("todayContent").innerHTML = bookList;
