function showBuckets() {
  let buckets = lists;
  let bucketHtml = "";

  for (let i = 0; i < buckets.length; i++) {
    bucketHtml += `
      <div class="bucket card card-body">
        <h3>${buckets[i].name}</h3>
        <ul>
          ${buckets[i].books.map(e => `<li>${e}</li>`).join('\n')}
        </ul>
        <br />
        <button type="button" onclick="setPopoverBucket(${i}); setPopoverDisplay(true);" class="btn btn-primary">
          <i class="bi bi-pencil-fill"></i> Edit
        </button>
        <button type="button" onclick="removeList(${i});" class="btn btn-danger">
          <i class="bi bi-eraser-fill"></i> Delete
        </button>
      </div>
    `;
  }
  bucketHtml += `
    <center>
      <button type="button" onclick="addBlankList(); setPopoverBucket(${buckets.length}); setPopoverDisplay(true);" id="add-list" class="btn btn-primary">Add List</button>
    </center>
    <br />
  `;
  document.getElementById("buckets").innerHTML = bucketHtml;
}

showBuckets();

function bucketDisplay(state) {
  if (state) {
    document.getElementById("buckets").style.display = "flex";
    document.getElementById("show-list").style.display = "none";
    document.getElementById("hide-list").style.display = "block";
  } else {
    document.getElementById("buckets").style.display = "none";
    document.getElementById("show-list").style.display = "block";
    document.getElementById("hide-list").style.display = "none";
  }
}