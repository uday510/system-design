const database = require('./database');
const express = require('express');
const redis = require('redis').createClient();

const app = express();

app.get('/nocache/index.html', (req, res) => {
    database.get('index.html', page => {
        res.send(page);
    });
});

app.get('/withcache/index.html', (req, res) => {
    redis.get('index.html', (err, redisRes) => {
     try {
         if(redisRes) {
        res.send(redisRes); 
        return;
      }
     } catch(err) {
         console.log(err);
         res.send();
         return;
     }

     database.get('index.html', page => {
         redis.set('index.html', page, 'EX', 10);
         res.send(page);
        });
    });
});
    

app.listen(3001, () => {
    console.log('Listening on port 3001!');
});