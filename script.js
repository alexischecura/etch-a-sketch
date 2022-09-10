const grids = document.querySelector(".grids");
const grid = document.createElement("div");

let sizeGridDefault = 16;

const createGrid = (sizeGrid) => {
  lado = 640 / sizeGrid;
  grids.innerHTML = "";
  grid.classList.add("grid");
  grid.style.width = (lado)+ "px";
  grid.style.height = lado + "px";
  grid.style.backgroundColor = "rgb(255, 255, 255)";
  for (let j = 0; j < sizeGrid; j++) {
    for (let i = 0; i < sizeGrid; i++) {
      grids.appendChild(grid.cloneNode(true));
    }
  }
  addEvents();
};
createGrid(sizeGridDefault);

let sizeGrid = sizeGridDefault;

const sizeBigger = document.querySelector(".sizeBigger");
const sizeSmaller = document.querySelector(".sizeSmaller");
const sizeDom = document.querySelector(".sizeDom");
sizeBigger.addEventListener("click", () => {
  if (sizeGrid === 64) return;
  createGrid(++sizeGrid);
  sizeDom.innerText = sizeGrid + " X " + sizeGrid;
});

sizeSmaller.addEventListener("click", () => {
  if (sizeGrid === 1) return;
  createGrid(--sizeGrid);
  sizeDom.innerText = sizeGrid + " X " + sizeGrid;
});

const colorSelector = document.querySelector(".colorSelector");

let color = colorSelector.value;
colorSelector.addEventListener(
  "input",
  (a) => {
    color = a.target.value;
    rainbowMode = false;
    shaddingMode = false;
  },
  false
);

colorSelector.addEventListener(
  "change",
  (a) => {
    color = a.target.value;
    rainbowMode = false;
    shaddingMode = false;
  },
  false
);

const colorBlack = document.querySelector(".colorBlack");
colorBlack.addEventListener("click", () => {
  colorSelector.value = "#000000";
  color = colorSelector.value;
  rainbowMode = false;
  shaddingMode = false;
});
const colorWhite = document.querySelector(".colorWhite");
colorWhite.addEventListener("click", () => {
  colorSelector.value = "#FFFFFF";
  color = colorSelector.value;
  shaddingBtn.classList.remove("selected");
  rainbowBtn.classList.remove("selected");
  rainbowMode = false;
  shaddingMode = false;
});
const colorRed = document.querySelector(".colorRed");
colorRed.addEventListener("click", () => {
  colorSelector.value = "#FF0000";
  color = colorSelector.value;
  shaddingBtn.classList.remove("selected");
  rainbowBtn.classList.remove("selected");
  rainbowMode = false;
  shaddingMode = false;
});
const colorGreen = document.querySelector(".colorGreen");
colorGreen.addEventListener("click", () => {
  colorSelector.value = "#00FF00";
  color = colorSelector.value;
  shaddingBtn.classList.remove("selected");
  rainbowBtn.classList.remove("selected");
  rainbowMode = false;
  shaddingMode = false;
});
const colorBlue = document.querySelector(".colorBlue");
colorBlue.addEventListener("click", () => {
  colorSelector.value = "#0000FF";
  color = colorSelector.value;
  shaddingBtn.classList.remove("selected");
  rainbowBtn.classList.remove("selected");
  rainbowMode = false;
  shaddingMode = false;
});
const colorYellow = document.querySelector(".colorYellow");
colorYellow.addEventListener("click", () => {
  colorSelector.value = "#FFFF00";
  color = colorSelector.value;
  shaddingBtn.classList.remove("selected");
  rainbowBtn.classList.remove("selected");
  rainbowMode = false;
  shaddingMode = false;
});
//Shadding and RGB Mode

let r = 0;
let g = 0;
let b = 0;

let shaddingMode = false;
const shaddingBtn = document.querySelector(".shadding");
shaddingBtn.addEventListener("click", () => {
  shaddingMode = !shaddingMode;
  if (shaddingMode) shaddingBtn.classList.add("selected");
  else {
    shaddingBtn.classList.remove("selected")
    color = colorSelector.value;
  }
  rainbowBtn.classList.remove("selected");
  rainbowMode = false;
});

let rainbowMode = false;
const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
  if (rainbowMode) rainbowBtn.classList.add("selected");
  else {
    rainbowBtn.classList.remove("selected");
    color = colorSelector.value;
  }
  shaddingBtn.classList.remove("selected");
  shaddingMode = false;
});

const rgbToArray = (rgbStr) => {
  return rgbStr.match(/\d+/g).map(Number);
};

function changeBGC() {
  if (rainbowMode) {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    color = `rgb(${r},${g},${b})`;
  } else if (shaddingMode) {
    let actualColor = rgbToArray(this.style.backgroundColor);
    color = `rgb(${(actualColor[0] -= 25)},${(actualColor[1] -= 25)},${(actualColor[2] -= 25)})`;
  }
  this.style.backgroundColor = color;
}

const boxs = document.querySelectorAll(".grid");
const erase = document.querySelector(".erase");
const eraseAll = () => {
  let boxs = document.querySelectorAll(".grid");
  boxs.forEach((box) => (box.style.backgroundColor = "rgb(255,255,255)"));
};

erase.addEventListener("click", eraseAll, false);

function addEvents() {
  let boxs = document.querySelectorAll(".grid");
  boxs.forEach((box) => box.addEventListener("mousedown", changeBGC, false));
  document.addEventListener("mousedown", (e) => {
    boxs.forEach((box) => box.addEventListener("mouseover", changeBGC, false));
  });
  document.addEventListener("mouseup", (e) => {
    boxs.forEach((box) =>
      box.removeEventListener("mouseover", changeBGC, false)
    );
  });
}
