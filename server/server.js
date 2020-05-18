const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// serve the build directory
// note that public directory is copied to buid directory upon running build script
app.use(express.static(path.join(__dirname, '../build'), { index: false })); // index : false is to allow request for the webroot to get caught by 'app.get('/*', function(req, res)', allowing http to https redirects, if neccessary

// serve the index
app.get('/*', function (req, res) {
		res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});
