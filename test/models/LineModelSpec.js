'use strict';
describe('LineModel', () => {
    it('should be of type LineModel', () => {
        const line = new Henry.LineModel();
        expect(line).toEqual(jasmine.any(Henry.LineModel));
    });

    it('should detect ACT', () => {
        let line = new Henry.LineModel('ACT II');
        expect(line.isAct()).toEqual(true);
        line = new Henry.LineModel('ACT XI');
        expect(line.isAct()).toEqual(true);
        line = new Henry.LineModel('ACT MM');
        expect(line.isAct()).toEqual(true);

        line = new Henry.LineModel('SCENE I');
        expect(line.isAct()).toEqual(false);
        line = new Henry.LineModel('So shaken as we are, so wan with care');
        expect(line.isAct()).toEqual(false);
    });

    it('should detect SCENE', () => {
        let line = new Henry.LineModel('SCENE I. Something');
        expect(line.isScene()).toEqual(true);
        line = new Henry.LineModel('SCENE M. Other text');
        expect(line.isScene()).toEqual(true);
        line = new Henry.LineModel('ACT II');
        expect(line.isScene()).toEqual(false);
        line = new Henry.LineModel('So shaken as we are, so wan with care');
        expect(line.isScene()).toEqual(false);
    });
});
