
export default class Deck {
    constructor (config) {
        this.cards = config.cards;
    }

    shuffle () {
        const unshuffled = [this.cards];
        if(unshuffled.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    insertAt(card, position) {
        
    }

    draw () {
        return this.cards.shift();
    }

    getCardsCount () {
        return this.cards.length;
    }
}