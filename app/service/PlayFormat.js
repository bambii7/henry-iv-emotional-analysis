import LineModel from '../models/LineModel';

class PlayFormat {

    static toStructured(data) {
        const structuredData = {};
        let currentAct = '';
        let currentScene = '';
        let act = '';
        let line = '';
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
                    act = structuredData[currentAct];
                    structuredData[currentAct] = Object.assign({}, act); // initialise act if empty
                    line = structuredData[currentAct][currentScene];
                    line = (line === undefined ? lineModel.text : line += ' ' + lineModel.text);
                    structuredData[currentAct][currentScene] = line;
                    break;
                default:
            }
        });
        return structuredData;
    }
}

export default PlayFormat;
