const express = require('express');
const app = express();

const port = 8081;


app.listen(8081, () => console.log(`Listening on port ${port}.`));

app.get('/hello', (req, res) => {
    console.log(req.headers);
    res.send(`Hello From Port ${port}.\n`);
});
