const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
// const chefscard = require('./data/chefscard.json');
const viewresi = require('./data/viewrecipes.json');
const chefscard = require('./data/chef.json');

app.get('/', (req, res) => {
    res.send('chef is running')
});

app.use(cors());

app.get('/chefscard', (req, res) => {
    res.send(chefscard)
});

app.get('/chefscard/:id', (req,res) => {
    const id = req.params.id;
    const selectedchef = chefscard.find(n => n.id == id);
    res.send(selectedchef)

})

app.get('/viewresi', (req, res) => {
    res.send(viewresi)
});

app.get('/viewresi/:id', (req, res) => {
    const id = req.params.id;
    const selectedresi = viewresi.find(n => n.id == id);
    res.send(selectedresi)
})


app.get('/chef', (req, res) => {
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Chef API is running on port ${port}`)
})