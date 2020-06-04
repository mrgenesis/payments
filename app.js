require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/boleto');

app.use(express.json());
app.use('/v', express.static(__dirname + "/src/view"));
app.get('/', (req, res) => {
    res.redirect('/v');
});
app.use('/boleto', router);
app.listen(3000, () => { 
    console.log('runing at port 3000...');
});