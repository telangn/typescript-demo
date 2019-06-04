const mongoose = require('mongoose');
/* 
Command line:
sudo service mongodb start
Type 'mongo' to enter shell

others:
sudo service mongodb status
sudo service mongodb restart
sudo service mongodb stop
*/

// Connect to mongodb
mongoose.connect('mongodb://localhost/mydb-new', { useNewUrlParser: true });
mongoose.connection.once('open', function() {
    console.log('Mongodb - Connection has been made');
}).on('error', function(error) {
    console.log('Connection Error: ', error);
});

const express = require('express');
const app = express();
app.use('/node_modules', express.static('node_modules'));
app.use('/', express.static('app'));
app.listen(1234, () => console.log(
    'Express server running at http://127.0.0.1:1234'));