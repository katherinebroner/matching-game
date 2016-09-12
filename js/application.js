$(document).ready(function() {
  var deck = new Deck();
  deck.populateDeck();
  var game = new Game(deck);
  game.startGame();

  count = 0;
  $(".cell").on("click", function(e){
    e.preventDefault();
    if(count < 1) {
      var firstClick = $(this).attr("value");
      $(this).html(firstClick);
      count++;
    } else {
      var secondClick = $(this).attr("value");
      $(this).html(secondClick);
      count = 0;
    }
  })
});
