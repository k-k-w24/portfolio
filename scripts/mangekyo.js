let symmetry = 6;
let angle;
let r;
let shapeType = 'circle'; // 初期はマル
let hueValue = 0;

function setup() {
  createCanvas(1200, 1000).parent("canvas-container");;
  angle = TWO_PI / symmetry;
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseIsPressed) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    r = sqrt(mx * mx + my * my);
    let theta = atan2(my, mx);

    let strokeColor = color((hueValue + frameCount) % 360, 80, 100, 80);
    stroke(strokeColor);
    fill(strokeColor);

    for (let i = 0; i < symmetry; i++) {
      rotate(angle);
      let x = r * cos(theta);
      let y = r * sin(theta);
      drawShape(x, y); // 形を描く関数に分離

      push();
      scale(1, -1); // 鏡映対称
      drawShape(x, y);
      pop();
    }
  }
}

// キー入力で形を変える
function keyPressed() {
  if (key === '1') shapeType = 'circle';
  if (key === '2') shapeType = 'square';
  if (key === '3') shapeType = 'triangle';
}

// 形を描く関数
function drawShape(x, y) {
  let size = 15;
  if (shapeType === 'circle') {
    ellipse(x, y, size, size);
  } else if (shapeType === 'square') {
    rectMode(CENTER);
    rect(x, y, size, size);
  } else if (shapeType === 'triangle') {
    triangle(x, y - size / 2, x - size / 2, y + size / 2, x + size / 2, y + size / 2);
  }
}
const target = document.querySelector(".tooltipButton");
const popup = document.getElementById("toolTip");

// ボタンにhoverした時
target.addEventListener('mouseover', () => {
  popup.style.display = 'block';
}, false);

// ボタンから離れた時
target.addEventListener('mouseleave', () => {
  popup.style.display = 'none';
}, false);

const button = document.querySelector(".tooltipButton");

button.addEventListener("click", function () {
  if (button.textContent === "OK") {
    button.textContent = "やってみよう";
  } else {
    button.textContent = "OK";
  }
});