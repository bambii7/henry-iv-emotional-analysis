'use strict';
describe('PlayFormat', () => {
    it('should be of type PlayFormat', () => {
        const r = new PlayFormat();
        expect(r).toEqual(jasmine.any(PlayFormat));
    });
});
