
export default class Deck {
    constructor (config) {
        this.cards = config.cards;
    }

    shuffle () {
        const unshuffled = this.cards;
        this.cards.sort();
        this.cards.reverse();

        if(unshuffled.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    insertAt(card, position) {
        return this.cards.splice(position, 0, card);
    }

    draw () {
        return this.cards.shift();
    }

    getCardsCount () {
        return this.cards.length;
    }
}