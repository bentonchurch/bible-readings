let bucketsShowing = false;

function showBuckets() {
  let buckets = lists;
  let bucketHtml = "";

  for (let i = 0; i < buckets.length; i++) {
    bucketHtml += `
      <div class="bucket card">
        <div class="card-body">
          <h5 class="card-title">${buckets[i].name}</h5>
          <ul class="mb-0">
            ${buckets[i].books.map(e => `<li>${e}</li>`).join('\n')}
          </ul>
        </div>
        <div class="card-footer">
          <button type="button" onclick="setPopoverBucket(${i}); setPopoverDisplay(true);" class="btn btn-primary">
            <i class="bi bi-pencil-fill"></i> Edit
          </button>
          <button type="button" onclick="removeList(${i});" class="btn btn-danger">
            <i class="bi bi-trash-fill"></i> Delete
          </button>
        </div>
      </div>
    `;
  }
  bucketHtml += `
    <button type="button" onclick="addBlankList(); setPopoverBucket(${buckets.length}); setPopoverDisplay(true);" id="add-list" class="btn btn-primary">
      New List
    </button>
  `;
  document.getElementById("buckets").innerHTML = bucketHtml;
}

showBuckets();

function bucketDisplayToggle() {
  if (!bucketsShowing) {
    document.getElementById("buckets").style.display = "flex";
    document.getElementById("lists-toggle").innerHTML = `Hide lists <i class="bi bi-chevron-up"></i>`;
  } else {
    document.getElementById("buckets").style.display = "none";
    document.getElementById("lists-toggle").innerHTML = `Show lists <i class="bi bi-chevron-down"></i>`;
  }

  bucketsShowing = !bucketsShowing;
}