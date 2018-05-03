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
    handL: 115,
    handR: 135,
    handSpeed: 0.5,
    footL: 112,
    footR: 138,
    footSpeed: 0.65,
    ifAdd: true,
    headCircleX: 125,
    headCircleY: 25,
    headCircleR: 10,
    headSpeed: 0.65,
    headif: true
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
    );
    // ctx.strokeStyle = "white";
    // ctx.moveTo(ren.headCircleX - 6,30);
    // ctx.lineTo(ren.headCircleX - 2, 30);
    // ctx.moveTo(ren.headCircleX + 6, 30);
    // ctx.lineTo(ren.headCircleX + 2, 30);
    // 绘制
    ctx.strokeStyle = "black";
    ctx.fillRect(ren.headCircleX - 2, 35, 4, 30);
    ctx.moveTo(ren.headCircleX - 2, 40);
    ctx.lineTo(ren.handL, 60);
    ctx.moveTo(ren.headCircleX + 2, 40);
    ctx.lineTo(ren.handR, 60);
    ctx.moveTo(ren.headCircleX, 65);
    ctx.lineTo(ren.footL, 90);
    ctx.moveTo(ren.headCircleX, 65);
    ctx.lineTo(ren.footR, 90);
    ctx.stroke();
    ctx.fill();
  }

  //让人动起来
  function loop() {
    //清空原图
    ctx.clearRect(0, 0, 600, 600);
    //身体
    // if (ren.headif && ren.headCircleX < 240) {
    //   ren.headCircleX += ren.headSpeed;
    // } else {
    //   ren.headif = false;
    //   ren.headCircleX -= ren.headSpeed;
    //   if (ren.headCircleX <= 25) {
    //     ren.headif = true;
    //   }
    // }
    // ren.handL = ren.headCircleX - 10;
    // ren.handR = ren.headCircleX + 10;
    // ren.footL = ren.headCircleX - 13;
    // ren.footR = ren.headCircleX + 13;
    //左手
    if (ren.ifAdd && ren.handL < 135) {
      ren.handL += ren.handSpeed;
    } else {
      ren.ifAdd = false;
      ren.handL -= ren.handSpeed;
      if (ren.handL <= 115) {
        ren.ifAdd = true;
      }
    }
    //右手
    if (ren.ifAdd && ren.handR > 115) {
      ren.handR -= ren.handSpeed;
    } else {
      ren.ifAdd = false;
      ren.handR += ren.handSpeed;
      if (ren.handR >= 135) {
        ren.ifAdd = true;
      }
    }
    //左腿
    if (ren.ifAdd && ren.footL < 138) {
      ren.footL += ren.footSpeed;
    } else {
      ren.ifAdd = false;
      ren.footL -= ren.footSpeed;
      if (ren.footL <= 112) {
        ren.ifAdd = true;
      }
    }
    //右腿
    if (ren.ifAdd && ren.footR > 112) {
      ren.footR -= ren.footSpeed;
    } else {
      ren.ifAdd = false;
      ren.footR += ren.footSpeed;
      if (ren.footR >= 138) {
        ren.ifAdd = true;
      }
    }
    ctx.save();
    renwu();
  }
  setInterval(loop, 16);
}
