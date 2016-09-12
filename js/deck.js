function Deck () {
  this.cards = [];
}

Deck.prototype.createNumbers = function() {
  var nums = [1,2,3,4,5,6,7,8,9,10];
  var duplicate = _.clone(nums);
  var combine = _.concat(nums, duplicate);
  return combine;
};

Deck.prototype.shuffleNumbers = function(numbers) {
  var shuffled = _.shuffle(numbers);
  return shuffled;
};

Deck.prototype.createCards = function(shuffled) {
  for (var i = 0; i < shuffled.length; i++){
    var card = new Card(shuffled[i]);
    this.cards.push(card);
      }
  return this.cards;
};

Deck.prototype.populateDeck = function() {
  var nums = this.createNumbers();
  var shuffled = this.shuffleNumbers(nums);
  this.createCards(shuffled);
};


