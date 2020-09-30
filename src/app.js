require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./error-handler');
const { CLIENT_ORIGIN } = require('./config');
const smoothies20Router = require('./smoothies20/smoothies20-router');
const smoothies32Router = require('./smoothies32/smoothies32-router');

const app = express();

const morganOption = (NODE_ENV === 'production') ? 'tiny' : 'dev';

app.use(morgan(morganOption));
app.use(helmet());
app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);

//ROUTERS FOR ENDPOINTS
app.use('/api/smoothies20', smoothies20Router);
app.use('/api/smoothies32', smoothies32Router);

//WELCOME ENDPOINT
app.get('/', (req, res) => {
    res.send('Welcome to Sportshack Supplement Depot!')
});

//ERROR HANDLER
app.use(errorHandler);

module.exports = app;