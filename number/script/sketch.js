posX = 250;
posY = 200;

function setup() {
  setSketchContainer(3 / 1.8, 'canvas');
  background(0);
}

function draw() {
  // 4/10.85점
  together(lotNumArry, 80, 24, [posX, posY]);
  // 4/11.80점
  together(lotNumArry2, 80, 24, [posX * 2 + 100, posY]);
  // 4/12.55점
  together(lotNumArry3, 80, 24, [posX * 3 + 200, posY]);
  // 4/14.65점
  together(lotNumArry4, 80, 24, [posX * 4 + 300, posY]);
  // 4/15.85점
  together(lotNumArry5, 80, 24, [posX * 5 + 400, posY]);
  // 4/16.55점
  together(lotNumArry6, 80, 24, [posX, 400]);
  // 4/17.85점
  together(lotNumArry7, 80, 24, [posX * 2 + 100, 400]);
  // 4/18.75점
  together(lotNumArry8, 80, 24, [posX * 3 + 200, 400]);
  // 4/19.55점
  together(lotNumArry9, 80, 24, [posX * 4 + 300, 400]);
  // 4/21.60점
  together(lotNumArry10, 80, 24, [posX * 5 + 400, 400]);
  // 4/22.90점
  together(lotNumArry11, 80, 24, [posX, 600]);
  // 4/23.85점
  together(lotNumArry12, 80, 24, [posX * 2 + 100, 600]);
  // 4/24.55점
  together(lotNumArry13, 80, 24, [posX * 3 + 200, 600]);
  // 4/25.90점
  together(lotNumArry14, 80, 24, [posX * 4 + 300, 600]);
  // 4/21.65점
  together(lotNumArry15, 80, 24, [posX * 5 + 400, 600]);
}

// -----------------------------------------------------------------//

function fireWorks(lotNumArry, rad, [x, y]) {
  for (let grp = 0; grp < 5; grp++) {
    for (let lotNumIdx = 0; lotNumIdx < 6; lotNumIdx++) {
      let angle =
        -HALF_PI + grp * (TAU / 5.0) + lotNumIdx * (TAU / (5.0 * 6.0));
      let lotNum = lotNumArry[grp][lotNumIdx];
      let length = (lotNum + 1) * (rad / 12);
      push();
      translate(x, y);
      rotate(angle);
      line(0, 0, length, 0);
      pop();
    }
  }
}

function writeText(lotNumArry, fontSize, [x, y]) {
  textSize(fontSize);
  for (let grp = 0; grp < 5; grp++) {
    for (let lotNumIdx = 0; lotNumIdx < 6; lotNumIdx++) {
      let lotNum = lotNumArry[grp][lotNumIdx];
      let newX = x + lotNumIdx * fontSize * 0.75;
      let newY = y + grp * fontSize;
      textSize(14);
      text(lotNum, newX, newY);
    }
  }
}

function together(lotNumArry, rad, fontSize, [x, y]) {
  stroke(255); // 컬러 날짜마다 수정해야함
  strokeWeight(1);
  strokeCap(ROUND);
  fireWorks(lotNumArry, rad, [x, y]);
  noStroke();
  fill(255);
  writeText(lotNumArry, fontSize, [x - 200, y - 45]);
}
