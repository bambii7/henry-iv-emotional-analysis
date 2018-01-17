'use strict';
describe('PlayFormat', () => {
    it('should be of type PlayFormat', () => {
        const playformat = new Henry.PlayFormat();
        expect(playformat).toEqual(jasmine.any(Henry.PlayFormat));
    });

    it('should detect ACT', () => {
        const playformat = new Henry.PlayFormat();
        expect(playformat.isAct('ACT II')).toEqual(true);
        expect(playformat.isAct('ACT XI')).toEqual(true);
        expect(playformat.isAct('ACT MM')).toEqual(true);
        expect(playformat.isAct('SCENE I')).toEqual(false);
    });
});
