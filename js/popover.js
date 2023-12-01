let curEditBucket = 0;

function setPopoverBucket(num) {
    let popover = document.getElementById("popover-content");
    popover.innerHTML="";
    popover.innerHTML+="<input type=\"text\" id=\"bucketname\" value=\""+lists[num].name+"\"><br>";


    // Add new book data
    let dropdown = "";
    dropdown+="<select name=\"addbookdropdown\"id=\"addbookdropdown\">";
    for (const i in bibleJson) {
        dropdown+="<option value=\""+i+"\">"+i+"</option>";
    }
    dropdown+="</select>"
    popover.innerHTML+=dropdown;
    popover.innerHTML+="<button type=\"button\">Add book</button>";

    curEditBucket=num;
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