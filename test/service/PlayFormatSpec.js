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
        expect(playformat.isAct('So shaken as we are, so wan with care')).toEqual(false);
    });

    it('should detect SCENE', () => {
        const playformat = new Henry.PlayFormat();
        expect(playformat.isScene('SCENE I. Something')).toEqual(true);
        expect(playformat.isScene('SCENE M. Other text')).toEqual(true);
        expect(playformat.isScene('ACT II')).toEqual(false);
        expect(playformat.isScene('So shaken as we are, so wan with care')).toEqual(false);
    });
});
