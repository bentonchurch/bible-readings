function calculateBook(num) {
  let day = lists[num].day;
  let start = lists[num].start;
  let startBook = start.split(" ")[0];
  let startChapter = 1 * start.split(" ")[1];
  let books = lists[num].books;

  let bookNum = books.indexOf(startBook);
  let bookChapter = startChapter;

  for (let i = 0; i < day; i++) {
    bookChapter++;
    if (bookChapter > bibleJson[books[bookNum]].length) {
      bookChapter = 1;
      bookNum++;
      if (bookNum >= books.length) {
        bookNum = 0;
      }
    }
  }

  return books[bookNum] + " " + bookChapter;
}
