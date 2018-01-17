'use strict';
describe('PlayFormat', () => {
    it('should be of type PlayFormat', () => {
        const playFormat = new Henry.PlayFormat();
        expect(playFormat).toEqual(jasmine.any(Henry.PlayFormat));
    });
});
