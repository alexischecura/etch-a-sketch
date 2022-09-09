const grids = document.querySelector(".grids");
const grid = document.createElement("div");
const colorSelector = document.querySelector(".colorSelector");

let size = 16;
let lado = 640 / size;
grid.classList.add("grid");
grid.style.width = lado + "px";
grid.style.height = lado + "px";
grid.style.backgroundColor = 'rgb(255, 255, 255)'

const createGrid = (size) => {
  grids.innerHTML = ''
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      grids.appendChild(grid.cloneNode(true));
    }
  }
};
createGrid(size);

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
const rubber = document.querySelector(".rubber");
rubber.addEventListener("click", () => {
  colorSelector.value = "#FFFFFF";
  color = colorSelector.value;
  rainbowMode = false;
  shaddingMode = false;
});
//Shadding and RGB Mode

let r = 0;
let g = 0;
let b = 0;
let levelOfShading = 0;

let shaddingMode = false;
const shaddingBtn = document.querySelector(".shadding");
shaddingBtn.addEventListener("click", () => {
  shaddingMode = !shaddingMode;
  levelOfShading = 250;
  rainbowMode = false;
});

let rainbowMode = false;
const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
  shaddingMode = false;
});

const rgbToArray = rgbStr => {
  return rgbStr.match(/\d+/g).map(Number);
};

function changeBGC() {
  if (rainbowMode) {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    color = `rgb(${r},${g},${b})`;
  } else if (shaddingMode) {
    if (levelOfShading > 0) {
      let actualColor = rgbToArray(this.style.backgroundColor) 
      console.log(actualColor)
      color = `rgb(${actualColor[0]-=25},${actualColor[1]-=25},${actualColor[2]-=25})`;
    }
  }
  this.style.backgroundColor = color;
}

const boxs = document.querySelectorAll(".grid");
const erase = document.querySelector('.erase')

const eraseAll = () => boxs.forEach((box) => box.style.backgroundColor = 'rgb(255,255,255)')

erase.addEventListener('click', eraseAll, false)

boxs.forEach((box) => box.addEventListener("mousedown", changeBGC, false));

document.addEventListener("mousedown", (e) => {
  boxs.forEach((box) => box.addEventListener("mouseover", changeBGC, false));
});
document.addEventListener("mouseup", (e) => {
  boxs.forEach((box) => box.removeEventListener("mouseover", changeBGC, false));
});

//Erase