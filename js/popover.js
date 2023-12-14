let curEditBucket = 0;

function setPopoverBucket(num) {
  curEditBucket=num;

  let popover = document.getElementById("popover-content");
  popover.innerHTML="";


  // Add bucket rename field
  popover.innerHTML+="<h1>Edit List</h1>";
  popover.innerHTML+="<br><h3>Name</h3><input type=\"text\" id=\"bucketname\" value=\""+lists[num].name+"\"><br><br>";

    
  // Add start book fields
  popover.innerHTML+="<h3>Current point in this list</h3>";
  let startBookDropdown = "";
  startBookDropdown+="<select name=\"starting-book-dropdown\"id=\"starting-book-dropdown\">";
  for (const i in lists[curEditBucket].books) {
    startBookDropdown+="<option value=\""+spaceDash(lists[curEditBucket].books[i])+"\">"+lists[curEditBucket].books[i]+"</option>";
  }
  startBookDropdown+="</select>"
  popover.innerHTML+=startBookDropdown;
  popover.innerHTML+="<input type=\"number\" id=\"starting-chapter\" min=\"1\" max=\""+1+"\" value=\"1\"/><br><br>";


  // Add current book data
  let bookList = popover.innerHTML;
  bookList+="<h3>Books</h3><div id=\"listbooks\"><ul>";
  bookList+="</ul></div>";
  popover.innerHTML=bookList;


  // Add new book data
  let dropdown = "";
  dropdown+="<select name=\"addbookdropdown\"id=\"addbookdropdown\">";
  for (const i in bibleJson) {
    dropdown+="<option value=\""+i+"\">"+i+"</option>";
  }
  dropdown+="</select>"
  popover.innerHTML+=dropdown;
  popover.innerHTML+="<button type=\"button\" onclick=\"addNewBook();\">Add book</button>";

  updateBooks();
}

function addNewBook() {
  let book = document.getElementById("addbookdropdown").value;
  lists[curEditBucket].books.push(book);
  updateBooks();
}

function removeBook(num) {
  lists[curEditBucket].books=removeElement(lists[curEditBucket].books, num);
  updateBooks();
}

function updateBooks() {
  let list = document.getElementById("listbooks");
  list.innerHTML="";

  let bookList = "";
  bookList+="<ul>";
  let j = 0;
  for (const i of lists[curEditBucket].books) {
    bookList+="<li><a href=\"javascript:void(0);\" onclick=\"removeBook("+j+");\">"+trashCan()+"</a><a href=\"javascript:void(0);\" onclick=\"moveBookUp("+j+");\"><i class=\"bi bi-caret-up-fill\"></i></a><a href=\"javascript:void(0);\" onclick=\"moveBookDown("+j+");\"><i class=\"bi bi-caret-down-fill\"></i></a> "+i+"</li>";
    j++;
  }
  bookList+="</ul></div><br>";
  list.innerHTML=bookList;

  //list.innerHTML+="<ul>";
  for (const i of lists[curEditBucket].books) {
    //list.innerHTML+="<li>"+i+"</li>";
  }
  //list.innerHTML+="</ul>";
}

function setData() {
  let bucketName = document.getElementById("bucketname").value;
  lists[curEditBucket]["name"]=bucketName;

  localStorage.lists=JSON.stringify(lists);
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
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i != num) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function trashCan() {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"trash-can\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash3-fill\" viewBox=\"0 0 16 16\"><path d=\"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5\"/></svg>";
}

function moveItem(data, from, to) {
  let f = data.splice(from, 1)[0];
  data.splice(to, 0, f);
  return data;
}

function moveBookUp(b) {
  lists[curEditBucket].books = moveItem(lists[curEditBucket].books, b, Math.max(b-1, 0));
  updateBooks();
}

function moveBookDown(b) {
  lists[curEditBucket].books = moveItem(lists[curEditBucket].books, b, Math.min(b+1, lists[curEditBucket].books.length-1));
  updateBooks();
}

function spaceDash(t) {
  return t.split(' ').join('-');
}