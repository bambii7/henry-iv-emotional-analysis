const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('dist'));

app.get('/api/henry-emotional-content', function(req, res) {
//    const readable = fs.createReadStream(emotionFilePath);
//    readable.pipe(res);
    
    const text = 'So shaken as we are, so wan with care';
    TextEmotion.getEmotion(text).then(function (data) {
        res.json(data);
    });
    
});

app.listen(3000, () => console.log('Henry app listening on port 3000!'));
