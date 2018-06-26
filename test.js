const { expect } = require('chai');
const Card = require('./Card.js');
const Guess = require('./Guess.js');
const Deck = require('./Deck.js');

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = new Card ('What is the capital of Alaska?', 'Juneau')
  });

  it('should exist', () => {
    expect(card).to.exist;
    expect(card).to.be.an.instanceof(Card);
  });

  it('should set instance properties', () => {
    expect(card.question).to.equal('What is the capital of Alaska?');
    expect(card.answer).to.equal('Juneau');
    expect(card.status).to.equal('faceDown');
  });

  it('should update status when flipped', () => {
    card.flip();
    expect(card.status).to.equal('faceUp');
    card.flip();
    expect(card.status).to.equal('faceDown');
  });
});

describe('Guess', () => {
  let card;

  beforeEach(() => {
    card = new Card('What is the capital of Alaska?', 'Juneau');
  });

  it('should exist', () => {
    const guess = new Guess('Juneau');

    expect(guess).to.exist;
    expect(guess).to.be.an.instanceof(Guess);
  });

  it('should set instance properties', () => {
    const guess = new Guess('Juneau');

    expect(guess.response).to.equal('Juneau');
    expect(guess.isCorrect).to.equal(null);
  });

  it('should provide positive feedback if guess is correct', () => {
    const guess = new Guess('Juneau');

    guess.submit(card);

    expect(guess.isCorrect).to.equal(true);
    expect(guess.getFeedback()).to.equal(`Great job! ${guess.response} is the right answer!`);
  });

  it('should provide negative feedback if guess is incorrect', () => {
    const guess = new Guess('Denver');

    guess.submit(card);

    expect(guess.isCorrect).to.equal(false);
    expect(guess.getFeedback()).to.equal(`Try again! ${guess.response} is not the answer!`);
  });

  it('should prompt you to submit a guess if you have not done so', () => {
    const guess = new Guess('Denver');

    expect(guess.isCorrect).to.equal(null);
    expect(guess.getFeedback()).to.equal(`You must submit a guess first!`);
  });
})

describe('Deck', () => {
  // it should:
  // * take in an array of cards
  // * have a count property that represents the amount of cards in the deck
  // * be able to add a card to the deck, and update the count
  // * be able to remove a card from the deck by it's ID, and update the count
})