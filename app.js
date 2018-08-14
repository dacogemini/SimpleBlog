const express = require('express');

//* Make an instance of Express
const app = express();

//* Register engine: app.engine(ext, callback)
//!                             ^^^ file extention (html)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server listening on PORT 3000');
});


