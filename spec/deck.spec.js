import Deck from "../src/models/deck";

<<<<<<< HEAD
=======

>>>>>>> 69ab9a88b8eb6cab54b460e5dfc7a2372a478c94
describe('deck', function () {
    const config = {
        cards: [1,3,6,12,24,9]
    }
    const deck = new Deck(config);

    it('shuffle cards', function () {
        expect(deck.shuffle).toBe(config.cards);
    });
});