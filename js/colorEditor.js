let r = document.querySelector(':root').style;
let vars = [
  {
    "name": "Navbar background color",
    "css": "--nav-bg-color"
  },
  {
    "name": "Navbar text color",
    "css": "--nav-text-color"
  },
  {
    "name": "Main background color",
    "css": "--body-background-color"
  },
  {
    "name": "Player ribbon background color",
    "css": "--player-ribbon-background-color"
  },
  {
    "name": "Today's readings background color",
    "css": "--today-block-background-color"
  },
  {
    "name": "Popover background color",
    "css": "--popover-background-color"
  },
  {
    "name": "Delete book button color",
    "css": "--popover-delete-button-color"
  },
  {
    "name": "Button/text input's primary color",
    "css": "--input-primary-color"
  },
  {
    "name": "Popover cancel button background color",
    "css": "--input-secondary-background-color"
  },
  {
    "name": "Bucket section background color",
    "css": "--bucket-background-color"
  },
  {
    "name": "Text input's input color",
    "css": "--text-input-text-color"
  },
  {
    "name": "Bucket section text color",
    "css": "--bucket-text-color"
  },
  {
    "name": "Button color",
    "css": "--button-color"
  },
  {
    "name": "Today section text color",
    "css": "--today-text-color"
  },
  {
    "name": "Play/pause button color",
    "css": "--play-button-color"
  }
];

let rs = getComputedStyle(document.querySelector(':root'));

for (let i = 0; i < vars.length; i++) {
  document.getElementById("edit-colors").innerHTML += `
    <div>
      <input type="color" id="color-id-${i}" name="color-${i}" value="${rs.getPropertyValue(vars[i].css)}" />
      <label for="color-${i}">${vars[i].name}</label>
    </div>
  `;
}

document.getElementById("edit-colors").innerHTML += `<br/><p>When you're done styling, send Eli the following code to have the styles perminently updated:</p><textarea id="custom-css" rows="8" cols="35"></textarea>`;

setTimeout(() => {
  for (let i = 0; i < vars.length; i++) {
    document.getElementById("color-id-" + i).addEventListener("input", function () {
      r.setProperty(vars[i].css, this.value);
      let s = "";
      for (let j = 0; j < vars.length; j++) {
        s += vars[j].css + ": " + rs.getPropertyValue(vars[j].css) + ";\n";
      }
      document.getElementById("custom-css").innerHTML = s;
    })
  }
}, 1000);