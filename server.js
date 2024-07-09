const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    console.log(req.body)
    const username = req.body.username;
    console.log(`Received username: ${username}`);
    res.send(`Welcome ${username}!`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
