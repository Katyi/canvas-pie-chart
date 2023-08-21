let ctx = document.querySelector("canvas").getContext("2d");

const colors = [
  "red", 
  "yellow", 
  "rgba(33, 150, 83, 1)",
  "rgba(86, 204, 242, 1)",
  "rgba(47, 128, 237, 1)",
  "rgba(155, 81, 224, 1)",
  "rgba(111, 207, 151, 1)",
  "rgba(242, 153, 74, 1)"
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function defineDataOfChart() {
  let numberOfSectors = randomNumber(1, 8);

  let randomDataOfShare = [];
  for (let i = 0; i < numberOfSectors; i++) {
    randomDataOfShare.push({
      shareNumber: randomNumber(1, 1000),
      radiusNumber: randomNumber(30, 300),
      colorOfShare: colors[i]
    });
  }

  return randomDataOfShare;
};


function drawPieChart() {
  randomDataOfShare = defineDataOfChart();
  let totalNumber = randomDataOfShare.reduce((sum, item) => sum + item.shareNumber, 0);
  let currentAngle = 0;

  for (let item of randomDataOfShare) {
      //the angle the portion in the chart
      let portionAngle = (item.shareNumber / totalNumber) * 2 * Math.PI;

      //drawing an arc and a line
      ctx.beginPath();
      ctx.arc(300, 300, item.radiusNumber, currentAngle, currentAngle + portionAngle);
      currentAngle += portionAngle;
      ctx.lineTo(300, 300);
      ctx.fillStyle = item.colorOfShare;
      ctx.fill();
  }
  // black hole on the center of chart :-)
  ctx.beginPath();
  ctx.arc(300, 300, 33, 0, 360);
  ctx.fillStyle = "black";
  ctx.fill();
};

// first chart
drawPieChart();

// generate new chart
document.querySelector("canvas").addEventListener('click', () => {
  ctx.clearRect(0, 0, 600, 600);
  drawPieChart();
});