const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

// GND terminal naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("GND", 410, 415)

// gnd terminal
ctx.fillStyle = "black";
roundRect(395, 425, 10, 10, 6);
ctx.fill();

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

// Vertical lines
ctx.beginPath();
ctx.moveTo(400, 62);
ctx.lineTo(400, 171);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 62);
ctx.lineTo(100, 171);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 245);
ctx.lineTo(400, 430);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(700, 62);
ctx.lineTo(700, 271);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(700, 200);
ctx.lineTo(700, 430);
ctx.stroke();

// Horizontal lines
ctx.beginPath();
ctx.moveTo(100, 430);
ctx.lineTo(700, 430);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 62);
ctx.lineTo(400, 62);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 62);
ctx.lineTo(510, 62);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(590, 62);
ctx.lineTo(701, 62);
ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(690, 340);
// ctx.lineTo(700, 346);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(690, 340);
// ctx.lineTo(710, 328);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 328);
// ctx.lineTo(690, 316);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(690, 316);
// ctx.lineTo(710, 302);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 302);
// ctx.lineTo(690, 290);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(690, 290);
// ctx.lineTo(710, 278);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 278);
// ctx.lineTo(698, 271);
// ctx.stroke();

// resistor 2

ctx.beginPath();
ctx.moveTo(510, 62);
ctx.lineTo(520,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(530, 62);
ctx.lineTo(540,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(550, 62);
ctx.lineTo(560,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(570, 62);
ctx.lineTo(580,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(530, 62);
ctx.lineTo(520,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(550, 62);
ctx.lineTo(540,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(570, 62);
ctx.lineTo(560,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(580, 48);
ctx.lineTo(590,62);
ctx.stroke();
// resistor 2 end

//resistor 3
ctx.beginPath();
ctx.moveTo(390, 240);
ctx.lineTo(400, 246);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(390, 240);
ctx.lineTo(410, 228);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 228);
ctx.lineTo(390, 216);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(390, 216);
ctx.lineTo(410, 202);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 202);
ctx.lineTo(390, 190);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(390, 190);
ctx.lineTo(410, 178);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 178);
ctx.lineTo(398, 171);
ctx.stroke();
//resistor3 end
// resister 3 ammeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(400, 300, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// resistor 3 Ammetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A3", 387, 301)


// ctx.beginPath();io
// ctx.moveTo(705, 345);
// ctx.lineTo(630, 345);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(630, 345);
// ctx.lineTo(630, 215);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(700, 215);
// ctx.lineTo(630, 215);
// ctx.stroke();

// ammetre circle
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(700, 280, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Ammetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A2", 687, 280)

//ground
ctx.beginPath();  
ctx.moveTo(420, 450);
ctx.lineTo(380, 450);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 455);
ctx.lineTo(390, 455);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(395, 460);
ctx.lineTo(405, 460);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 430);
ctx.lineTo(400, 450);
ctx.stroke();

//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#voltageSlider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltageSpinner").spinner("value", 0.05); // number initialisation : jQuery widget
  //resistor 1
  $("#resistor1Slider").slider("value", 0.01);
  $("#resistor1Spinner").spinner("value", 0.01);
  //resistor 2
  $("#resistor2Slider").slider("value", 0.01);
  $("#resistor2Spinner").spinner("value", 0.01);
  //resistor 3
  $("#resistor3Slider").slider("value", 0.01);
  $("#resistor3Spinner").spinner("value", 0.01);
  // $("#CsArea").spinner("value", 0.01);
  // $("#Ivalue").spinner("value", 0.01);
}

function varchange() {
  $("#voltageSlider").slider({ max: 300, min: 0, step: 10 });
  $("#voltageSpinner").spinner({ max: 300, min: 0, step: 10 });

  $("#voltageSlider").on("slide", function (e, ui) {
    $("#voltageSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltageSpinner").on("spin", function (e, ui) {
    $("#voltageSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltageSpinner").on("change", function () {
    varchange();
  });

  // resistor 1

  $("#resistor1Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor1Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor1Slider").on("slide", function (e, ui) {
    $("#resistor1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor1Spinner").on("spin", function (e, ui) {
    $("#resistor1Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor1Spinner").on("change", function () {
    varchange();
  });
  $("#resistor1Spinner").on("touch-start", function () {
    varchange();
  });

  // resistor 2
  $("#resistor2Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor2Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor2Slider").on("slide", function (e, ui) {
    $("#resistor1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor2Spinner").on("spin", function (e, ui) {
    $("#resistor2Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor2Spinner").on("change", function () {
    varchange();
  });
  $("#resistor2Spinner").on("touch-start", function () {
    varchange();
  });

  // resistor 3
  $("#resistor3Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor3Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor3Slider").on("slide", function (e, ui) {
    $("#resistorSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor3Spinner").on("spin", function (e, ui) {
    $("#resistor3Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor3Spinner").on("change", function () {
    varchange();
  });
  $("#resistor3Spinner").on("touch-start", function () {
    varchange();
  });
  //
  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
}
function varupdate() {
  $("#voltageSpinner").spinner("value", $("#voltageSlider").slider("value")); //updating slider location with change in spinner(debug)
  $("#resistor1Spinner").spinner("value", $("#resistor1Slider").slider("value"));
  $("#resistor2Spinner").spinner("value", $("#resistor2Slider").slider("value"));
  $("#resistor3Spinner").spinner("value", $("#resistor3Slider").slider("value"));
  volt = $("#voltageSpinner").spinner("value"); //Updating variables
  res1 = $("#resistorSpinner").spinner("value");
 };

window.addEventListener("load", varinit);
