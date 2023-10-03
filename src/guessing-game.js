class GuessingGame {
    constructor(number) {
        this.number = number;
        this.min;
        this.max;
        this.result;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
            this.result = Math.ceil((this.min + this.max) / 2);
            return this.result;
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
}

module.exports = GuessingGame;
