class Card {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    this.status = 'faceDown';
    this.id = new Date();
  }

  flip() {
    if (this.status === 'faceDown') {
      this.status = 'faceUp';
    } else {
      this.status = 'faceDown';
    }
  }
}


module.exports = Card;