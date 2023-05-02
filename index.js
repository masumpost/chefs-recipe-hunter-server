const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefscard = require('./data/chefscard.json');


app.get('/', (req, res) => {
    res.send('chef is running')
});

app.use(cors());

app.get('/chefscard', (req, res) => {
    res.send(chefscard)
})

app.listen(port, () => {
    console.log(`Chef API is running on port ${port}`)
})