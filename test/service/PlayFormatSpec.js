'use strict';
describe('PlayFormat', () => {
    it('should be of type PlayFormat', () => {
        const playFormat = new Henry.PlayFormat();
        expect(playFormat).toEqual(jasmine.any(Henry.PlayFormat));
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
        const actSceneData = Henry.PlayFormat.toStructured(playData);
        expect(actSceneData).toEqual(
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
