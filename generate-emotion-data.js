require('dotenv').config();
const path = require('path');
const fs = require('fs');

const TextEmotion = require(__dirname + '/api/service/TextEmotion');
const PlayFormat = require(__dirname + '/api/service/PlayFormat');

const emotionFilePath = path.join(__dirname, 'api/data/henry_iv.json');
const henryIV = fs.readFileSync(emotionFilePath);
const actSceneData = PlayFormat.toStructured(JSON.parse(henryIV.toString()));

const queries = [];

for (var act in actSceneData) {
    for (var scene in actSceneData[act]) {
        const emotionPromise = TextEmotion.getEmotion(actSceneData[act][scene], act, scene);
        queries.push(emotionPromise);
    }
}

Promise.all(queries).then(function(result) {
    const stringData = JSON.stringify(result);
    fs.writeFileSync(__dirname + '/api/data/henry_iv_emotion_data.json', stringData);
});