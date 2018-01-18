# Henry IV Emotional Analysis

To avoid keeping user & pass in a git repo please configure your environement with a `.env` file containing the following. 

```
 BLUEMIX_USER='user'
 BLUEMIX_PASS='pass'
```

For simplicity/speed while developing the output from blue mix is stored as a JSON file. Running `generate-emotion-data.js` will query and output this file.

```
node generate-emotion-data.js
npm run build
npm start
```

### To Test

Test Node API with Mocha & Chai. Run following command.

```
npm run apitest
```

~~Test frontend with~~ 
```
npm test
```