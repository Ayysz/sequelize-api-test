const express = require('express');
const app = express();

const routes = require('./routes/index');
const db = require('./models');
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
// routes ke route.js
app.use('/api/v1', routes);

// handler error
app.use((err, req, res, next) => {
    console.error(err.stack);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
        error: err.message
    });
});

// membuat server
app.listen(8080, (err) => {
    err?
        console.error(`Error on - ${err}`):
        console.log(`Server running at http://localhost:8080`);
        db.sequelize.sync();
});