'use strict';
const describe   = require('mocha').describe;
const it         = require('mocha').it;
const expect     = require('chai').expect;

const TextEmotion = require('../../../api/service/TextEmotion');

describe('TextEmotion', () => {
    it('should be of type TextEmotion', () => {
        const textEmotion = new TextEmotion();
        expect(textEmotion).to.be.an.instanceof(TextEmotion);
    });
});
