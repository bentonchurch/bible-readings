/*
Firebase nonsense

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLOQq4eu8Z2Fo1JLafeeHulAteAx1uEp8",
  authDomain: "oneailbible.firebaseapp.com",
  projectId: "oneailbible",
  storageBucket: "oneailbible.appspot.com",
  messagingSenderId: "650394498154",
  appId: "1:650394498154:web:255a7ac1bbed002090c613"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Real code
*/

let audio;
let todayChapters = [];
let curChapter = 0;
let startAudio;

for (let i = 0; i < lists.length; i++) {
  todayChapters.push(calculateBook(i));
}

function play() {
  if (startAudio == undefined) {
    //startAudio = new Audio("player/start.mp3");
  }
  if (audio == undefined) {
    if (curChapter%1 === 0) {
      let book = todayChapters[curChapter].split(" ")[0];
      let chapter = todayChapters[curChapter].split(" ")[1];
      audio = new Audio(generateLink(book, chapter));
    } else {
      audio = new Audio("player/start.mp3");;
    }
    audio.addEventListener("ended", function () {
      if (curChapter < todayChapters.length-0.5) {
        curChapter+=0.5;
        audio = undefined;
        play();
      } else {
        curChapter = 0;
        audio = undefined;
      }
    });
  }

  if (audio != undefined) {
    if (audio.paused) {
      audio.play();
      document.getElementById("audiotrigger").classList.add("pause");
      document.getElementById("audiotrigger").classList.remove("play");
    } else {
      audio.pause();
      document.getElementById("audiotrigger").classList.add("play");
      document.getElementById("audiotrigger").classList.remove("pause");
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
