var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var GAP_BETWEEN_BARS = 50;
var MAX_BAR_Y = CLOUD_Y + GAP * 4 + FONT_GAP * 3; //координаты по у где может начинаться колонка с максимальной высотой
var NOTE_OF_MAX_TIME_Y = MAX_BAR_Y - GAP; //координаты по у где может начинаться запись для колонки с максимальной высотой


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(times) {
  var maxElement = Math.round(times[0]);

  for (var i = 1; i < times.length; i++) {
    if (Math.round(times[i]) > maxElement) {
      maxElement = Math.round(times[i]);
    }
  }
  return maxElement;
};

function getRandomNumber(min, max) {
  return min + Math.random() * (max - min);
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3 + FONT_GAP * 2);

  var maxTime = getMaxElement(times);
  var rgbaX = getRandomNumber(0.1, 0.9); 
