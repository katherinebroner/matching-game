describe("Card", function(){
  var card;

  beforeEach(function(){
    card = new Card();
  });

  describe("value", function(){
    it("has a default value of 0", function(){
      expect(card.value).toEqual(0);
    });
  });
});