const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
const config = require('./../config/config')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());



app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});
