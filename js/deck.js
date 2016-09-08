function Deck () {
  this.cards = [];
}

Deck.prototype.createNumbers = function() {
  var nums = [1,2,3,4,5,6,7,8,9,10];
  var duplicate = _.clone(nums);
  var combine = _.concat(nums, duplicate);
  return combine;
};

var deck = new Deck;
var nums = deck.createNumbers();
console.log(nums);
