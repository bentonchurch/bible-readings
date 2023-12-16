function showBuckets() {
  let buckets = lists;
  let bucketHtml = "";

  for (let i = 0; i < buckets.length; i++) {
    bucketHtml += '<div class="bucket"><h2>' + buckets[i].name + "</h2><ul>";
    for (let j = 0; j < buckets[i].books.length; j++) {
      bucketHtml += "<li>" + buckets[i].books[j] + "</li>";
    }
    bucketHtml += "</ul><br><button type=\"button\" onclick=\"setPopoverBucket("+i+");setPopoverDisplay(true);\"><i class=\"bi bi-pencil-fill\"></i> Edit</button>";
    bucketHtml += "<button type=\"button\" onclick=\"removeList("+i+");\"><i class=\"bi bi-eraser-fill\"></i> Delete</button></div>";
  }
  bucketHtml += "<center><button type=\"button\" onclick=\"addBlankList();\" id=\"add-list\">Add List</button></center><br>";
  document.getElementById("buckets").innerHTML = bucketHtml;
}

showBuckets();