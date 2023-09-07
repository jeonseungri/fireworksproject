let img;
function preload() {
  img = loadImage('Lottologo.png');
}

let lottoTime = [
  '155th',
  '156th',
  '157th',
  '158th',
  '159th',
  '160th',
  '161st',
  '162nd',
];
let word;
let money = ['2000', '10000', '20000', '30000', '40000'];
let word2;
const fireworks = [];

let initSpeed = 50; //발사 될때 초기의 속도
let gravity;
let gravityMag = 0.05; // 중력 세기, y 방향으로 작용하는 중력의 크기
let windMag = 1; // 바람의 세기, x 방향으로 가속
let frictionC = 0.5; //감속마찰 나타내는 값, 날아가는 동안 속도가 감소하는 정도

function setup() {
  setSketchContainer(3 / 2, 'canvas'); // id? 캔버스 비율
  gravity = createVector(0, gravityMag);
}
//회차
function processLottoTime(index) {
  word = lottoTime[index];
  console.log(word);
}
for (let i = 0; i < lottoTime.length; i++) {
  let delay = (i + 1) * 3000; // 항목마다 3초씩 증가하는 지연 시간 설정
  setTimeout(processLottoTime.bind(null, i), delay);
}
//당첨금액
function processMoney(index) {
  word2 = money[index];
  console.log(word2);
}

for (let i = 0; i < money.length; i++) {
  let delay = (i + 1) * 3000; // 항목마다 3초씩 증가하는 지연 시간 설정
  setTimeout(processMoney.bind(null, i), delay);
}
function draw() {
  image(img, 40, 30, img.width * 0.8, img.height * 0.8);
  /// 회차
  fill(225);
  noStroke();
  textSize(25);
  textAlign(CENTER);
  textFont('EstablishRetrosans');
  text(word, width / 2, 50);
  //숫자
  fill(100, 255, 0);
  noStroke();
  textSize(25);
  textAlign(RIGHT);
  textFont('REM');
  text(word2, width - 45, 50);

  fireworks.forEach((eachFireworks) => {
    eachFireworks.update(gravity, windMag, frictionC);
  });

  background(0, 32);

  fireworks.forEach((eachFireworks) => {
    eachFireworks.display();
  });

  noFill();
  stroke(225);
  strokeWeight(1);
  line(45, height - 55, width - 45, height - 55);

  let numDays = Math.floor((width - 45) / 40) + 1;
  //요일
  for (let x = 0; x < numDays; x++) {
    let days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    fill(255);
    noStroke();
    textSize(14);
    textAlign(CENTER);
    textFont('Inter');
    textStyle(NORMAL);
    text(days[x], 170 + x * 190, height - 30);
  }
  //   그래프;
  noFill();
  stroke(225);
  strokeWeight(1);

  let numLines = Math.floor(height / 10) + 1;
  for (let y = 0; y < numLines; y++) {
    let yPos = 170 + y * 62;
    // for (let y = 45; y <= height - 45; y = y + 80) {
    //   stroke(31);
    //   line(100, y, width - 45, y);
    // }
    // 행운 점수
    fill(255);
    noStroke();
    textSize(14);
    textAlign(LEFT);
    textStyle(NORMAL);
    let num = 100 - y * 10;
    if (num > 0) {
      text(num, 45, yPos + 10);
    }
  }
}

function mousePressed() {
  const newFireworks = new Fireworks(
    mouseX,
    height,
    mouseX,
    mouseY,
    initSpeed,
    [255, 0, 0]
  );
  fireworks.push(newFireworks);
  // newFireworks.explode();
  console.log(newFireworks);
}
