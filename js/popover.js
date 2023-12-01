let curEditBucket = 0;

function setPopoverBucket(num) {
    let popover = document.getElementById("popover-content");
    popover.innerHTML="";
    popover.innerHTML+="<input type=\"text\" id=\"bucketname\" value=\""+lists[num].name+"\"><br><br>";


    // Add current book data
    let bookList = popover.innerHTML;
    bookList+="<div id=\"listbooks\"><ul>";
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

    curEditBucket=num;

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
        bookList+="<li><a href=\"javascript:void(0);\" onclick=\"removeBook("+j+");\"><i class=\"bi bi-x-circle-fill\"></i></a> "+i+"</li>";
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