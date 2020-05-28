require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/boleto');
app.use(express.json());

app.use('/boleto', router);
app.listen(3000, () => {
    console.log('runing at port 3000...');
});