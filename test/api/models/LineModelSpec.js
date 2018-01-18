'use strict';
const describe   = require('mocha').describe;
const it         = require('mocha').it;
const expect     = require('chai').expect;

const LineModel = require('../../../api/models/LineModel');

describe('LineModel', () => {
    it('should be of type LineModel', () => {
        const line = new LineModel();
        expect(line).to.be.an.instanceof(LineModel);
    });

    it('should detect ACT', () => {
        let line = new LineModel('ACT II');
        expect(line.isAct()).to.equal(true);
        line = new LineModel('ACT XI');
        expect(line.isAct()).to.equal(true);
        line = new LineModel('ACT MM');
        expect(line.isAct()).to.equal(true);

        line = new LineModel('SCENE I');
        expect(line.isAct()).to.equal(false);
        line = new LineModel('So shaken as we are, so wan with care');
        expect(line.isAct()).to.equal(false);
    });

    it('should detect SCENE', () => {
        let line = new LineModel('SCENE I. Something');
        expect(line.isScene()).to.equal(true);
        line = new LineModel('SCENE M. Other text');
        expect(line.isScene()).to.equal(true);
        line = new LineModel('ACT II');
        expect(line.isScene()).to.equal(false);
        line = new LineModel('So shaken as we are, so wan with care');
        expect(line.isScene()).to.equal(false);
    });

    it('should return the line category', () => {
        let line = new LineModel('SCENE I. Something');
        expect(line.detectType()).to.equal(LineModel.TYPE.SCENE);
        line = new LineModel('ACT II');
        expect(line.detectType()).to.equal(LineModel.TYPE.ACT);
        line = new LineModel('So shaken as we are, so wan with care');
        expect(line.detectType()).to.equal(LineModel.TYPE.CONTENT);
    });
});
