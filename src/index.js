const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3001;
var morgan = require('morgan');

const route = require('./routes');
const db = require('./config/db');

//connect DB

db.connect();

//HTTP logger
//app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',

    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource','views'));
//console.log('PATH: ', path.join(__dirname, 'resources/views'))

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
