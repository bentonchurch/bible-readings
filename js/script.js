let audio;
let todayChapters = [];
let curChapter = 0;
let startAudio;
let audioEndFunction = function () {
  if (curChapter%1 === 0) {
    lists[curChapter].start = calculateBook(curChapter, 1);
    localStorage.lists = JSON.stringify(lists);
    showToday();
    showBuckets();
  }
  if (curChapter < todayChapters.length-0.5) {
    curChapter+=0.5;
    audio = undefined;
    play();
  } else {
    curChapter = 0;
    audio = undefined;
    document.getElementById("audiotrigger").classList.add("play");
    document.getElementById("audiotrigger").classList.remove("pause");
    document.getElementById("audiotrigger").classList.remove("wait");
  }
};

for (let i = 0; i < lists.length; i++) {
  todayChapters.push(lists[i].start);
}

function play() {
  if (audio == undefined) {
    if (curChapter%1 === 0) {
      let book = todayChapters[curChapter].split(" ").slice(0, -1).join(" ");
      let chapter = todayChapters[curChapter].split(" ").slice(-1)[0];
      audio = new Audio(generateLink(book, chapter));
    } else {
      audio = new Audio("player/start.mp3");;
    }
    audio.addEventListener("ended", audioEndFunction);
    document.getElementById("audiotrigger").classList.remove("pause");
    document.getElementById("audiotrigger").classList.remove("play");
    document.getElementById("audiotrigger").classList.add("wait");
    audio.addEventListener("canplay", function () {
      if (audio.paused) {
        play();
      }
    });
  }

  if (audio != undefined) {
    if (audio.paused) {
      audio.play();
      document.getElementById("audiotrigger").classList.add("pause");
      document.getElementById("audiotrigger").classList.remove("play");
      document.getElementById("audiotrigger").classList.remove("wait");
    } else {
      audio.pause();
      document.getElementById("audiotrigger").classList.add("play");
      document.getElementById("audiotrigger").classList.remove("pause");
      document.getElementById("audiotrigger").classList.remove("wait");
    }
  }
}
/*
function pauseIcon() {
  document.getElementById("audiotrigger").classList.add("pause");
  document.getElementById("audiotrigger").classList.remove("play");
}

function playIcon() {
  document.getElementById("audiotrigger").classList.add("play");
  document.getElementById("audiotrigger").classList.remove("pause");
}
*/
function generateLink(book, chapter) {
  return (
    "https://audio.esv.org/david-cochran-heath/mq/" +
    book +
    "+" +
    chapter +
    "%3A" +
    1 +
    "%E2%80%93" +
    bibleJson[book][chapter] /* 2 */ +
    ".mp3"
  );
}
