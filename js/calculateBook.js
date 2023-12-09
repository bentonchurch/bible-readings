function calculateBook(num) {
  let day = lists[num].day;
  let start = lists[num].start;
  let startBook = start.split(" ")[0];
  let startChapter = 1 * start.split(" ")[1];
  let books = lists[num].books;

  let bookNum = books.indexOf(startBook);
  let bookChapter = startChapter;

  console.log(lists);

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

function updateStart(num) {
  // If list is unchanged
  //   Do nothing

  // If today's book exists
  //   Set start book to be today's book and start chapter to today's chapter
  //   Set day to 0

  // If book doesn't exist
  //   Set book to be first chapter of first book
  //   Set day to 0
}