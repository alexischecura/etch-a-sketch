const grids = document.querySelector(".grids");
const grid = document.createElement("div");
const colorSelector = document.querySelector('.colorSelector')

let size = 16;
let lado = 640/size;
grid.classList.add("grid");
grid.style.width = lado+"px";
grid.style.height = lado+"px";

const createGrid = (size) => {
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      grids.appendChild(grid.cloneNode(true));
    }
  }
};
createGrid(size)

let color = colorSelector.value
colorSelector.addEventListener("input", (a) => {
  color = a.target.value
  rainbowMode = false}, false);
colorSelector.addEventListener("change", (a) => {
  color = a.target.value
  rainbowMode = false
}, false);

const colorBlack = document.querySelector('.colorBlack')
colorBlack.addEventListener('click', () => {
  colorSelector.value = '#000000';
  color = colorSelector.value;
  rainbowMode = false
}
)
const rubber = document.querySelector('.rubber')
rubber.addEventListener('click', () => {
  colorSelector.value = '#FFFFFF';
  color = colorSelector.value;
  rainbowMode = false
}
)

let rainbowMode = false;
const rainbowBtn = document.querySelector('.rainbow')
rainbowBtn.addEventListener('click', () => {
  rainbowMode = !rainbowMode
  let r = 0;
  let g = 0;
  let b = 0;
})


const boxs = document.querySelectorAll('.grid')
function changeBGC() {
  if (rainbowMode){
    r = Math.round(Math.random()*255)
    g = Math.round(Math.random()*255)
    b = Math.round(Math.random()*255)
    color = `rgb(${r},${g},${b})`}
    this.style.backgroundColor = color;
  }

boxs.forEach(box => box.addEventListener("mousedown", changeBGC, false))

document.addEventListener('mousedown', (e) =>{
    boxs.forEach(box => box.addEventListener("mouseover", changeBGC, false))

})
document.addEventListener('mouseup', (e) =>{
    boxs.forEach(box => box.removeEventListener("mouseover", changeBGC, false)) 
})


