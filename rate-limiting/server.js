const express = require('express');
const database = require('./database');
const app = express();

app.listen(3000, () => console.log(`Listening on port 3000`));

// Keep a hash table of the previous access time for each user.
const accesses = {};

app.get('/index.html', (req, res) => {
    const {user} = req.headers;
    if(user in accesses) {
        const previousAccessTime = accesses[user];
        console.log(previousAccessTime);
        
        //Limit to 1 request every 5 seconds.
        if(Date.now() - previousAccessTime < 5000) {
            return res.status(429).send('Too many requests.\n');
        }

        //Serve the page and store this access time.
        database.get('index.html', page => {
            accesses[user] = Data.now();
            console.log(page);
            res.send(page + '\n');
        })
    }
})