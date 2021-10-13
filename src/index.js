const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/hello/:name?', (req, res)=>{
    if(!req.params.name)
        res.send('Hello World!');
    else{
        const message = 'Hello ' + req.params.name;
        res.send(message);
    }
});

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
});
