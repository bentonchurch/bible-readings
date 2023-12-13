let audio;
let todayChapters = [];
let curChapter = 0;
let startAudio;

for (let i = 0; i < lists.length; i++) {
  todayChapters.push(calculateBook(i));
}

function play() {
  if (startAudio == undefined) {
    startAudio = new Audio("player/start.mp3");
  }
  if (audio == undefined) {
    if (curChapter%1 > 0) {
      audio = startAudio;
    } else {
      let book = todayChapters[curChapter].split(" ")[0];
      let chapter = todayChapters[curChapter].split(" ")[1];
      audio = new Audio(generateLink(book, chapter));
    }
    audio.addEventListener("ended", function () {
      console.log("audio has ended")
      curChapter+=0.5;
      audio = undefined;
      if (curChapter < todayChapters.length-0.5) {
        play();
      } else {
        curChapter = 0;
        document.getElementById("audiotrigger").classList.add("play");
        document.getElementById("audiotrigger").classList.remove("pause");
      }
    });
    //startAudio.play();
  }

  if (audio != undefined) {
    if (audio.paused) {
      audio.play();
      document.getElementById("audiotrigger").classList.add("pause");
      document.getElementById("audiotrigger").classList.remove("play");
      /*
      var msg = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();
      let i = Math.round(Math.random() * 100);
      msg.voice = voices[8];
      console.log(i);
      msg.volume = 1; // From 0 to 1
      msg.rate = 1; // From 0.1 to 10
      msg.pitch = 0.4; // From 0 to 2
      msg.text = "Matthew, Mark, Luke and John";
      speechSynthesis.speak(msg);
      //89 is siiiiiick, 13 is weird, 8 maybe...? or 18
      */
    } else {
      audio.pause();
      document.getElementById("audiotrigger").classList.add("play");
      document.getElementById("audiotrigger").classList.remove("pause");
    }
  }
}

function generateLink(book, chapter) {
  return (
    "https://audio.esv.org/david-cochran-heath/mq/" +
    book +
    "+" +
    chapter +
    "%3A" +
    1 +
    "%E2%80%93" +
    /* bibleJson[book][chapter] */ 2 +
    ".mp3"
  );
}
