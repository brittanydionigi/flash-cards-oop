class Deck {
  constructor(cards) {
    this.cards = cards;
    this.count = cards.length;
    this.id = new Date();
  }

  get count() {
    return this.count;
  }

  addCard(card) {
    this.cards.push(card);
    this.count++;
  }

  removeCard(cardId) {
    this.cards = this.cards.filter(card => card.id !== cardId);
    this.count = this.cards.length;
  }
}


module.exports = Deck;