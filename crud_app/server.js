const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./server/database/connection');
const app = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));
//connect to mongodb
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//set view engine
app.set("view engine", "ejs");
//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

//routes
app.use('/', require('./server/routes/router'));


app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
})