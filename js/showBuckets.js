function showBuckets() {
  let buckets = lists;
  let bucketHtml = "";

  for (let i = 0; i < buckets.length; i++) {
    bucketHtml += '<div class="bucket"><h2>' + buckets[i].name + "</h2><ul>";
    for (let j = 0; j < buckets[i].books.length; j++) {
      bucketHtml += "<li>" + buckets[i].books[j] + "</li>";
    }
    bucketHtml += "</ul><br><button type=\"button\" onclick=\"setPopoverBucket(" + i + ");setPopoverDisplay(true);\"><i class=\"bi bi-pencil-fill\"></i> Edit</button>";
    bucketHtml += "<button type=\"button\" onclick=\"removeList(" + i + ");\"><i class=\"bi bi-eraser-fill\"></i> Delete</button></div>";
  }
  bucketHtml += "<center><button type=\"button\" onclick=\"addBlankList();setPopoverBucket(" + (buckets.length) + ");setPopoverDisplay(true);\" id=\"add-list\">Add List</button></center><br>";
  document.getElementById("buckets").innerHTML = bucketHtml;
}

showBuckets();

function bucketDisplay(state) {
  if (state) {
    document.getElementById("buckets").style.display = "block";
    document.getElementById("show-list").style.display = "none";
    document.getElementById("hide-list").style.display = "block";
  } else {
    document.getElementById("buckets").style.display = "none";
    document.getElementById("show-list").style.display = "block";
    document.getElementById("hide-list").style.display = "none";
  }
}