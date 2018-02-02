'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var GAP_BETWEEN_BARS = 50;
var MAX_BAR_Y = CLOUD_Y + GAP * 4 + FONT_GAP * 3;
var NOTE_OF_MAX_TIME_Y = MAX_BAR_Y - GAP;
var VICTORY_TEXT_X = CLOUD_X + GAP * 2;
var VICTORY_TEXT_Y = CLOUD_Y + GAP * 2 + FONT_GAP;
var NAMES_Y = CLOUD_Y + GAP * 6 + FONT_GAP * 3;
var TOTAL_GAP = (BAR_WIDTH + GAP_BETWEEN_BARS);
var NOTE_AND_BAR_X = CLOUD_X + GAP * 3;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (times) {
  var maxElement = times[0];

  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

var getRandomNumber = function (min, max) {
  return min + Math.random() * (max - min);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', VICTORY_TEXT_X, VICTORY_TEXT_Y);
  ctx.fillText('Список результатов:', VICTORY_TEXT_X, VICTORY_TEXT_Y + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var currentBarHeight = Math.round(times[i]) * MAX_BAR_HEIGHT / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], NOTE_AND_BAR_X + TOTAL_GAP * i, NAMES_Y + MAX_BAR_HEIGHT);
    ctx.fillText(Math.round(times[i]), NOTE_AND_BAR_X + TOTAL_GAP * i, NOTE_OF_MAX_TIME_Y + MAX_BAR_HEIGHT - currentBarHeight);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var rgbaX = getRandomNumber(0.1, 0.9);
      ctx.fillStyle = 'rgba(0, 0, 255, ' + rgbaX + ')';
    }
    ctx.fillRect(NOTE_AND_BAR_X + TOTAL_GAP * i, MAX_BAR_Y + MAX_BAR_HEIGHT - currentBarHeight, BAR_WIDTH, currentBarHeight);
  }
};
