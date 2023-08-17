// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(req);
// });
// server.listen(3000)


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database conected successfully!!");
}).catch(err => {
    console.log('Could not connect to Database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Hello, Welcome to my first node crud app !"});
});

app.listen(3000, () => {
    console.log('App listening on port 3000')
});