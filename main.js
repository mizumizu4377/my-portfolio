window.onload = function () {};
var ichix = 0;
var ichiy = 0;

const draw1 = function () {
  var canvas = document.getElementById("stage");
  console.log(canvas);
  if (canvas.getContext) {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(ichix, ichiy);
    context.lineTo(ichix + 0, ichiy - 100);
    context.closePath();
    context.stroke();
    ichix += 0;
    ichiy -= 100;
    console.log("hiita");
  }
};

const draw2 = function () {
  var canvas = document.getElementById("stage");
  console.log(canvas);
  if (canvas.getContext) {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(ichix, ichiy);
    context.lineTo(ichix + 100, ichiy + 0);
    context.closePath();
    context.stroke();
    ichix += 100;
    ichiy += 0;
    console.log("hiita");
  }
};

const draw3 = function () {
  var canvas = document.getElementById("stage");
  console.log(canvas);
  if (canvas.getContext) {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(ichix, ichiy);
    context.lineTo(ichix - 100, ichiy + 0);
    context.closePath();
    context.stroke();
    ichix -= 100;
    ichiy += 0;
    console.log("hiita");
  }
};

const draw4 = function () {
  var canvas = document.getElementById("stage");
  console.log(canvas);
  if (canvas.getContext) {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(ichix, ichiy);
    context.lineTo(ichix + 0, ichiy + 100);
    context.closePath();
    context.stroke();
    ichix += 0;
    ichiy += 100;
    console.log("hiita");
  }
};

const draw5 = function () {
  var canvas = document.getElementById("stage");
  console.log(canvas);
  if (canvas.getContext) {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(ichix, ichiy);
    context.lineTo(ichix + 77.8, ichiy + 77.8);
    context.closePath();
    context.stroke();
    ichix += 77.8;
    ichiy += 77.8;
    console.log("hiita");
  }
};

const button1 = document.getElementById("button1");
button1.onclick = draw1;
button2.onclick = draw2;
button3.onclick = draw3;
button4.onclick = draw4;
button5.onclick = draw5;
