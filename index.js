
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
app.get('', (req, res) => {

    let number= {number: Math.floor(100000 + Math.random() * 900000)}
    
                        setTimeout(function() {
                            res.json(number);
                        }, 10000);
    });
app.get('/number', (req, res) => {

let number= {number: Math.floor(100000 + Math.random() * 900000)}

                    setTimeout(function() {
                        res.json(number);
                    }, 10000);
});


app.listen(3000, () => console.log('Server Started on localhost:3000'))
