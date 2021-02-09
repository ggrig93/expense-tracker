const express     = require('express');
const dotenv      = require('dotenv');
const colors      = require('colors');
const transaction = require('./routes/transactions');
const connectDB   = require('./config/db');
const morgan      = require('morgan');

dotenv.config({path: './config/config.env'});

connectDB();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}

const PORT = process.env.PORT || 6000;


app.use('/api/v1/transactions', transaction);

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.green.inverse));



