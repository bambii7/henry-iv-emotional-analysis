'use strict';
const describe   = require('mocha').describe;
const it         = require('mocha').it;
const expect     = require('chai').expect;

const PlayFormat = require('../../../api/service/PlayFormat');

'use strict';
describe('PlayFormat', () => {
    it('should be of type PlayFormat', () => {
        const playFormat = new PlayFormat();
        expect(playFormat).to.be.an.instanceof(PlayFormat);
    });

    it('should structure play data into acts & scenes', () => {
        const playData = [
            {text_entry: 'ACT I'},
            {text_entry: 'SCENE I. London. The palace.'},
            {text_entry: 'Enter KING HENRY, LORD JOHN OF LANCASTER, the EARL of WESTMORELAND, SIR WALTER BLUNT, and others'},
            {text_entry: 'SCENE II. London. An apartment of the Prince\'s'},
            {text_entry: 'So shaken as we are, so wan with care'},
            {text_entry: 'ACT II'},
            {text_entry: 'SCENE I. Rochester. An inn yard.'},
            {text_entry: 'Find we a time for frighted peace to pant'},
            {text_entry: 'SCENE II. The highway, near Gadshill.'},
            {text_entry: 'And breathe short-winded accents of new broils'},
            {text_entry: 'Of hostile paces: those opposed eyes'}
        ];
        const actSceneData = PlayFormat.toStructured(playData);
        expect(actSceneData).to.deep.equal(
            {
                'ACT I': {
                    'SCENE I. London. The palace.': 'Enter KING HENRY, LORD JOHN OF LANCASTER, the EARL of WESTMORELAND, SIR WALTER BLUNT, and others',
                    'SCENE II. London. An apartment of the Prince\'s': 'So shaken as we are, so wan with care'
                },
                'ACT II': {
                    'SCENE I. Rochester. An inn yard.': 'Find we a time for frighted peace to pant',
                    'SCENE II. The highway, near Gadshill.': 'And breathe short-winded accents of new broils Of hostile paces: those opposed eyes'
                }
            }
        );
    });
});
