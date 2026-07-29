function showToday() {
  let bookList = "";
  for (let i = 0; i < lists.length; i++) {
    bookList += `
      <a href="#" class="list-group-item list-group-item-action" id="play-chapter-${i}">
        <i class="bi bi-play-circle"></i> ${lists[i].start}
      </a>
    `;
  }

  document.getElementById("todayContent").innerHTML = bookList;

  for (let i = 0; i < lists.length; i++) {
    document.getElementById("play-chapter-" + i).addEventListener("click", () => {
      if (audio) {
        audio.pause();
        audio = undefined;
      }
      curChapter = i - 0.5;
      audioEndFunction();
      setActiveSong(i);
    })
  }
}

function setActiveSong(i) {
  for (const child of document.getElementById("todayContent").children) {
    child.classList.remove("active");
  }

  document.getElementById("play-chapter-" + Math.floor(i)).classList.add("active");
}

showToday();