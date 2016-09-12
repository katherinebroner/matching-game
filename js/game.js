$(document).ready(function() {

  function Game() {
    this.cards = deck.cards;
  }

  Game.prototype.chunkCards = function(original) {
    var nested = _.chunk(original, 5);
    return nested;
  }

  Game.prototype.assignCards = function(nested) {
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 5; j++) {
        var cell = $("#row-" + i + " .col-" + j).attr(nested[i][j]);
      }
    }
  };

  game = new Game();
  cards = game.cards;
  chunk = game.chunkCards(cards);
  assigned = game.assignCards(chunk);
});