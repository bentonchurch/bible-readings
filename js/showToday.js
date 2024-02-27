function showToday() {
  let bookList = "";
  for (let i = 0; i < lists.length; i++) {
    bookList += "<li>&nbsp;<i class=\"bi bi-play-circle\" id=\"play-chapter-"+i+"\"></i>&nbsp;&nbsp;" + lists[i].start + "</li>";
  }

  document.getElementById("todayContent").innerHTML = bookList;

  for (let i = 0; i < lists.length; i++) {
    document.getElementById("play-chapter-"+i).addEventListener("click", () => {
      if (audio) {
        audio.pause();
        audio=undefined;
      }
      curChapter=i-0.5;
      audioEndFunction();
    })
  }
}

showToday();