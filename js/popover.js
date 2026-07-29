let curEditBucket = 0;

function setPopoverBucket(num) {
  curEditBucket = num;

  let popover = document.getElementById("popover-content");

  // Add bucket rename field
  popover.innerHTML = `
    <h1>Edit List</h1>
    <br />
    <h3>Name</h3>
    <input class="form-control" type="text" id="bucketname" value="${lists[num].name}">
    <br />
    <br />

    <h3>Current point in this list</h3>
    <select class="form-select" name="starting-book-dropdown" id="starting-book-dropdown"></select>
    <input type="number" class="form-control" id="starting-chapter" min="1" value="${lists[curEditBucket].start.split(' ').slice(-1)[0]}" onkeyup="this.value = Math.max(this.value, 1);" />
    <span id="max-chapter"> / 1</span>
    <br />
    <br />

    <h3>Books</h3>
    <div id="listbooks">
      <ul></ul>
    </div>
    <select class="form-select" name="addbookdropdown" id="addbookdropdown">
      ${Object.keys(bibleJson).map(e => `<option value="${e}">${e}</option>`)}
    </select>
    <button type="button" onclick="addNewBook();" class="btn btn-primary">Add book</button>
  `;

  // Add script to run when number box is updated
  document.getElementById("starting-book-dropdown").onchange = updateStartInput;

  updateBooks();
  updateStartInput();
}

function addNewBook() {
  let book = document.getElementById("addbookdropdown").value;
  lists[curEditBucket].books.push(book);
  updateBooks();
  updateStartInput();
}

function removeBook(num) {
  lists[curEditBucket].books = removeElement(lists[curEditBucket].books, num);
  updateBooks();
  updateStartInput();
}

function updateBooks() {
  let list = document.getElementById("listbooks");
  list.innerHTML = "";

  let bookList = "";
  bookList += "<ul>";
  let j = 0;
  for (const i of lists[curEditBucket].books) {
    bookList += `
      <li>
        <a class="btn btn-danger" href="javascript:void(0);" onclick="removeBook(${j});">
          <i class="bi bi-trash-fill"></i>
        </a>
        <a class="btn btn-secondary" href="javascript:void(0);" onclick="moveBookUp(${j});">
          <i class="bi bi-caret-up-fill"></i>
        </a>
        <a class="btn btn-secondary" href="javascript:void(0);" onclick="moveBookDown(${j});">
          <i class="bi bi-caret-down-fill"></i>
        </a> ${i}
      </li>
    `;
    j++;
  }
  bookList += "</ul></div><br>";
  list.innerHTML = bookList;

  updateStart(curEditBucket);
}

function setData() {
  let bucketName = document.getElementById("bucketname").value;
  lists[curEditBucket]["name"] = bucketName;
  lists[curEditBucket]["start"] = lists[curEditBucket]["start"].split(' ').slice(0, -1).join(' ') + " " + Math.min(document.getElementById('starting-chapter').value, document.getElementById('starting-chapter').getAttribute("max"));

  localStorage.lists = JSON.stringify(lists);
  showToday();
  showBuckets();
}

function setPopoverDisplay(type) {
  if (type) {
    document.getElementById("popover-background").style.display = 'block';
  } else {
    document.getElementById("popover-background").style.display = 'none';
  }
}

function removeElement(array, num) {
  if (array.length > 1) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i != num) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  return array;
}

function moveItem(data, from, to) {
  let f = data.splice(from, 1)[0];
  data.splice(to, 0, f);
  return data;
}

function moveBookUp(b) {
  lists[curEditBucket].books = moveItem(lists[curEditBucket].books, b, Math.max(b - 1, 0));
  updateBooks();
}

function moveBookDown(b) {
  lists[curEditBucket].books = moveItem(lists[curEditBucket].books, b, Math.min(b + 1, lists[curEditBucket].books.length - 1));
  updateBooks();
}

function spaceDash(t) {
  return t.split(' ').join('-');
}

function updateStart(num) {
  if (lists[num].books.indexOf(lists[num].start.split(' ').slice(0, -1).join(' ')) === -1) {
    lists[num].start = lists[num].books[0] + " 1";
  }
}

function updateStartInput() {
  let newInput = "";
  let stillExists = false;
  let val = document.getElementById("starting-book-dropdown").value;
  for (const i in lists[curEditBucket].books) {
    newInput += "<option value=\"" + spaceDash(lists[curEditBucket].books[i]) + "\">" + lists[curEditBucket].books[i] + "</option>";
    if (lists[curEditBucket].start.split(' ').slice(0, -1).join(' ') === lists[curEditBucket].books[i]) {
      stillExists = true;
    }
  }
  document.getElementById("starting-book-dropdown").innerHTML = newInput;
  if (!stillExists || !val) {
    document.getElementById("starting-book-dropdown").value = spaceDash(lists[curEditBucket].start.split(' ').slice(0, -1).join(' '));
  } else {
    document.getElementById("starting-book-dropdown").value = val;
  }
  let numChapters = bibleJson[document.getElementById("starting-book-dropdown").options[document.getElementById("starting-book-dropdown").selectedIndex].text].length;
  document.getElementById("starting-chapter").max = numChapters;
  document.getElementById("starting-chapter").value = Math.min(lists[curEditBucket].start.split(' ').slice(-1), numChapters);
  document.getElementById("max-chapter").innerHTML = " / " + numChapters;
  lists[curEditBucket].start = document.getElementById("starting-book-dropdown").options[document.getElementById("starting-book-dropdown").selectedIndex].text + " " + Math.min(lists[curEditBucket].start.split(' ').slice(-1), numChapters);
}

function resetData() {
  lists = JSON.parse(localStorage.lists);
}

function addBlankList() {
  lists.push({
    name: "New List",
    start: "Genesis 1",
    books: ["Genesis"]
  });
  localStorage.lists = JSON.stringify(lists);
  showToday();
  showBuckets();
}

function removeList(num) {
  lists = removeElement(lists, num);
  localStorage.lists = JSON.stringify(lists);
  showToday();
  showBuckets();
}