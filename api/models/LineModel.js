class LineModel {
    constructor(text) {
        this.text = text;
    }

    detectType() {
        let type = LineModel.TYPE.CONTENT;
        if (this.isAct()) {
            type = LineModel.TYPE.ACT;
        } else if (this.isScene()) {
            type = LineModel.TYPE.SCENE;
        }
        return type;
    }

    isAct() {
        return LineModel.ACT.test(this.text);
    }

    isScene() {
        return LineModel.SCENE.test(this.text);
    }
}

LineModel.TYPE = {
    ACT: 'ACT',
    SCENE: 'SCENE',
    CONTENT: 'CONTENT'
};

LineModel.TYPES = [LineModel.TYPE.ACT, LineModel.TYPE.SCENE, LineModel.TYPE.CONTENT];

LineModel.ACT = /^ACT\ (I|V|X|L|C|D|M)+$/i;

LineModel.SCENE = /^SCENE\ (I|V|X|L|C|D|M)+\.(.+)/i;

module.exports = LineModel;
