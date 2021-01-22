import Deck from "../src/models/deck";


describe('deck', function () {
    const config = {
        cards: [1,3,6,12,24,9]
    }
    const deck = new Deck(config);

    it('shuffle cards', function () {
        expect(deck.shuffle).toBe(config.cards);
    });
});