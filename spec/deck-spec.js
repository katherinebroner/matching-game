describe("Deck", function(){
  var deck;

  beforeEach(function() {
    deck = new Deck();
  });

  describe("cards", function(){
    it("is initialized with an empty array of cards", function(){
      expect(deck.cards).toEqual([]);
    });
  });
});