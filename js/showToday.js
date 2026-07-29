function showToday() {
  // Display today's date
  document.getElementById("curDate").innerText = getDate();

  // Fill the "today" panel with a playlist of today's chapters
  document.getElementById("todayContent").innerHTML = lists.map((e, i) => `
    <a href="#" class="list-group-item list-group-item-action" id="play-chapter-${i}">
      <i class="bi bi-play-circle"></i> ${e.start}
    </a>
  `).join('\n');

  // Add event listeners to each item in the playlist
  for (let i = 0; i < lists.length; i++) {
    document.getElementById("play-chapter-" + i).addEventListener("click", () => {
      if (audio) {
        audio.pause();
        audio = undefined;
      }
      curChapter = i - 0.5;
      audioEndFunction();
      setActiveAudio(i);
    })
  }
}

// Sets the active
function setActiveAudio(i) {
  for (const child of document.getElementById("todayContent").children) {
    child.classList.remove("active");
  }

  document.getElementById("play-chapter-" + Math.floor(i)).classList.add("active");
}

showToday();