var canvas = document.getElementById("study");
// var width = screen.availWidth;
// var height = screen.availHeight;
// var width = document.documentElement.clientWidth || document.body.clientWidth;
// var height = document.documentElement.clientHeight || document.body.clientHeight;
// canvas.style.width = width;
// canvas.style.height = height;
// console.log(width);
// console.log(height);
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // drawing code here
  draw(ctx);
} else {
  console.log("该浏览器不支持canvas，请使用谷歌浏览器！");
}
function draw(ctx) {
  var ren = {
    handL: 15,
    handR: 35,
    handSpeed: 0.5,
    footL: 12,
    footR: 38,
    footSpeed: 0.65,
    ifAdd: true,
    headCircleX: 25,
    headCircleY: 25,
    headCircleR: 10,
    headSpeed: 1,
    headCircleX: 23,
    headCircleX: 23
  };
  //绘制人
  function renwu() {
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(
      ren.headCircleX,
      ren.headCircleY,
      ren.headCircleR,
      0,
      Math.PI * 2,
      true
    ); // 绘制
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
    ctx.fillRect(ren.headCircleX - 2, 35, 4, 30);
    ctx.moveTo(23, 40);
    ctx.lineTo(ren.handL, 60);
    ctx.moveTo(27, 40);
    ctx.lineTo(ren.handR, 60);
    ctx.moveTo(25, 65);
    ctx.lineTo(ren.footL, 90);
    ctx.moveTo(25, 65);
    ctx.lineTo(ren.footR, 90);
    ctx.stroke();
    ctx.fill();

    // // 绘制
    // ctx.fillRect(ren.headCircleX - 2, 35, 4, 30);
    // ctx.moveTo(ren.headCircleX - 2, 40);
    // ctx.lineTo(ren.handL, 60);
    // ctx.moveTo(ren.headCircleX + 2, 40);
    // ctx.lineTo(ren.handR, 60);
    // ctx.moveTo(ren.headCircleX, 65);
    // ctx.lineTo(ren.footL, 90);
    // ctx.moveTo(ren.headCircleX, 65);
    // ctx.lineTo(ren.footR, 90);
    // ctx.stroke();
    // ctx.fill();
  }

  //让人动起来
  function loop() {
    //清空原图
    ctx.clearRect(0, 0, 600, 600);
    //左手
    if (ren.ifAdd && ren.handL < 35) {
      ren.handL += ren.handSpeed;
    } else {
      ren.ifAdd = false;
      ren.handL -= ren.handSpeed;
      if (ren.handL <= 15) {
        ren.ifAdd = true;
      }
    }
    //右手
    if (ren.ifAdd && ren.handR > 15) {
      ren.handR -= ren.handSpeed;
    } else {
      ren.ifAdd = false;
      ren.handR += ren.handSpeed;
      if (ren.handR >= 35) {
        ren.ifAdd = true;
      }
    }
    //左腿
    if (ren.ifAdd && ren.footL < 38) {
      ren.footL += ren.footSpeed;
    } else {
      ren.ifAdd = false;
      ren.footL -= ren.footSpeed;
      if (ren.footL <= 12) {
        ren.ifAdd = true;
      }
    }
    //右腿
    if (ren.ifAdd && ren.footR > 12) {
      ren.footR -= ren.footSpeed;
    } else {
      ren.ifAdd = false;
      ren.footR += ren.footSpeed;
      if (ren.footR >= 38) {
        ren.ifAdd = true;
      }
    }
    ctx.save();
    renwu();
  }
  setInterval(loop, 16);
}
