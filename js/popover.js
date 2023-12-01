let curEditBucket = 0;

function setPopoverBucket(num) {
    let popover = document.getElementById("popover-content");
    popover.innerHTML="";
    popover.innerHTML+="<input type=\"text\" id=\"bucketname\" value=\""+lists[num].name+"\">";
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