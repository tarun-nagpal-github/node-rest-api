const express = require('express');
const app = express();
const PORT = 3000;

// Get Default route
app.get('/', (req, res) => {
    console.log(`Request --> ${req}`);
    console.log(`Resposne -->`+ res);
    console.dir(res.ip);

    res.json('Hello World');
});

// App Listner 
app.listen(PORT, ()=>{
   console.log('Welcome to My App!');
});
