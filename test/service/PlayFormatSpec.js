'use strict';
describe('PlayFormat', () => {
    it('should be of type PlayFormat', () => {
        const playformat = new Henry.PlayFormat();
        expect(playformat).toEqual(jasmine.any(Henry.PlayFormat));
    });
});
