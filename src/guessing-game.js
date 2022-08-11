class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min=min;
      this.max=max;
    }

    guess() {
       this.middle=(((this.max+this.min)/2 + 0.5)^0);
       return (this.middle);
    }

    lower() {
      this.max=this.middle;
      
    }
    

    greater() {
      this.min=this.middle;
      
    }
}

module.exports = GuessingGame;
