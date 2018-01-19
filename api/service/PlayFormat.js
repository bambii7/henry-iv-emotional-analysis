const LineModel = require('../models/LineModel');

class PlayFormat {

    static toStructured(data) {
        const structuredData = {};
        let currentAct = '';
        let currentScene = '';
        data.forEach((lineData) => {
            const lineModel = new LineModel(lineData.text_entry);
            const lineType = lineModel.detectType();
            switch(lineType) {
                case LineModel.TYPE.ACT:
                    currentAct = lineModel.text;
                    break;
                case LineModel.TYPE.SCENE:
                    currentScene = lineModel.text;
                    break;
                case LineModel.TYPE.CONTENT:
                    if (structuredData[currentAct]) {
                        structuredData[currentAct] = {
                            [currentScene]: ''
                        };
                    }
                    structuredData[currentAct][currentScene] += ' ' + lineModel.text;
                    break;
                default:
            }
        });
        return structuredData;
    }
}

module.exports = PlayFormat;
