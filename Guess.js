class Guess {
  constructor(response) {
    this.response = response;
    this.isCorrect = null;
  }

  submit(card) {
    card.flip();
    if (this.response === card.answer) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }

  getFeedback() {
    let result;

    switch(this.isCorrect) {
      case true:
        result = `Great job! ${this.response} is the right answer!`;
        break;

      case false:
        result = `Try again! ${this.response} is not the answer!`;
        break;

      default:
        result = `You must submit a guess first!`;
        break;
    }

    return result;
  }
}


module.exports = Guess;