$(document).ready(function() {
  var deck = new Deck();
  deck.populateDeck();
  game = new Game(deck);
  game.startGame();

  count = 0;
  $(".cell").on("click", function(e){
    e.preventDefault();
    if(count < 1) {
      $('.clicked').html("").removeClass('clicked');
      $(this).addClass("clicked");
      firstVal = $(this).attr("value");
      $(this).html(firstVal);
      count++;
    } else {
      $(this).addClass("clicked");
      var secondVal = $(this).attr("value");
      $(this).html(secondVal);
      if (game.compareCards(firstVal,secondVal)){
        $('.clicked').removeClass('clicked').addClass('matched');
      }
      count = 0;
    }
  })


});
