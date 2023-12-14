let lists = localStorage.lists;
let bibleJson = localStorage.bibleData;

function initCache() {
  if (lists == undefined) {
    localStorage.lists = `[
      {
        "name": "The Gospels",
        "start": "Matthew 1",
        "books": [
          "Matthew",
          "Mark",
          "Luke",
          "John"
        ]
      },
      {
        "name": "The Pentateuch",
        "start": "Genesis 1",
        "books": [
          "Genesis",
          "Exodus",
          "Leviticus",
          "Numbers",
          "Deuteronomy"
        ]
      },
      {
        "name": "The Psalms",
        "start": "Psalms 1",
        "books": [
          "Psalms"
        ]
      }
    ]`;
  }

  lists = JSON.parse(localStorage.lists);

  if (bibleJson == undefined) {
    fetch("bible.json")
      .then((res) => res.json())
      .then((data) => {
        localStorage.bibleData = JSON.stringify(data);
      });
  }

  bibleJson = JSON.parse(localStorage.bibleData);
}

initCache();