let lists = localStorage.lists;
let bibleJson = localStorage.bibleData;

function initCache() {
  if (lists == undefined) {
    localStorage.lists = JSON.stringify([{"name":"1. Gospels","start":"Matthew 1","books":["Matthew","Mark","Luke","John"]},{"name":"2. Pentateuch","start":"Genesis 1","books":["Genesis","Exodus","Leviticus","Numbers","Deuteronomy"]},{"name":"3. Epistles A","start":"Romans 1","books":["Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","Hebrews"]},{"name":"4. Epistles B","start":"1 Thessalonians 1","books":["1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"]},{"name":"5. Wisdom Books","start":"Job 1","books":["Job","Ecclesiastes","Song of Solomon"]},{"name":"6. Psalms","start":"Psalms 1","books":["Psalms"]},{"name":"7. Proverbs","start":"Proverbs 1","books":["Proverbs"]},{"name":"8. OT History","start":"Joshua 1","books":["Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther"]},{"name":"9. Major & Minor Prophets","start":"Isaiah 1","books":["Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"]},{"name":"10. Acts of the Apostles","start":"Acts 1","books":["Acts"]}]);
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