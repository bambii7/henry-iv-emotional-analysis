const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    'username': process.env.BLUEMIX_USER,
    'password': process.env.BLUEMIX_PASS,
    'version_date': '2017-02-27'
});

class TextEmotion {}

TextEmotion.getEmotion = (text, act, scene) => {
    const parameters = TextEmotion.parameterFactory(text);
    return new Promise((resolve, reject) => {
        naturalLanguageUnderstanding.analyze(parameters, (err, response) => {
            if (err) {
                reject(err);
            } else {
                const result = {
                    act: act,
                    scene: scene,
                    emotion: response.emotion.document.emotion
                };
                resolve(result);
            }
        });
    });
};

TextEmotion.parameterFactory = (text) => {
    return {
        text: text,
        features: {
            emotion: {
                document: true
            }
        }
    };
};

module.exports = TextEmotion;
