// var canvas = document.getElementById("study");
// // var width = screen.availWidth;
// // var height = screen.availHeight;
// // var width = document.documentElement.clientWidth || document.body.clientWidth;
// // var height = document.documentElement.clientHeight || document.body.clientHeight;
// // canvas.style.width = width;
// // canvas.style.height = height;
// // console.log(width);
// // console.log(height);
// if (canvas.getContext) {
//   var ctx = canvas.getContext("2d");
//   // drawing code here
//   draw(ctx);
// } else {
//   console.log('该浏览器不支持canvas，请使用谷歌浏览器！');
// }
// function draw(ctx) {
//     ctx.beginPath();
//     ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
//     ctx.moveTo(110, 75);
//     ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
//     ctx.moveTo(65, 65);
//     ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
//     ctx.moveTo(95, 65);
//     ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
//     ctx.stroke();  
// }