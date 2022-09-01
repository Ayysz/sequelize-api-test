const express = require('express');
const app = express();

const path = require('path');
const routes = require('./routes');
const db = require('./models');
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/test', (req, res) => {
    const dirPath = path.join(__dirname, 'public/index.html')
    console.log(dirPath);
    res.sendFile(dirPath);
});
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
const port = process.env.PORT ||3000;
app.listen(port, (err) => {
    err?
        console.error(`Error on - ${err}`):
        console.log(`Server running at http://localhost:${port}`);
        db.sequelize.sync();
});