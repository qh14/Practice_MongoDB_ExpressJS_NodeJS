const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send("CRUD APP");
})


app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
})