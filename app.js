const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./src/routers/web.router');
const PORT = 3000;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());
//cau hinh static file
app.use(express.static('public'));
// setup thu muc views lam thu muc goc view engine
app.set('views', path.join(__dirname, 'src/views'));
// setup su dung view engine ejs
app.set('view engine', 'ejs');
//router
app.use(router);

app.listen(PORT, 'localhost', () => console.log(`Server is running at http://localhost:${PORT}`));