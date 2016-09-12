$(document).ready(function() {

  function Game() {
    this.cards = deck.cards;
  }

  Game.prototype.chunkCards = function(original) {
    var nested = _.chunk(original, 5);
    return nested;
  }

  Game.prototype.assignCards = function(cards) {
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 5; j++) {
        // debugger;
        var cell = $("#row-" + i + " .col-" + j).html(cards[i][j]);
        // debugger;
      }
    }

  };

  game = new Game();
  cards = game.cards;
  chunk = game.chunkCards(cards);
  console.log(chunk);
  // assigned = game.assignCards(cards);
  // console.log(game.cards);
})