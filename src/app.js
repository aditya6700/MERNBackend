require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const router = require('./routes/routes');

require('./db/conn');

const port = process.env.PORT || 1432;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const staticPath = path.join(__dirname,'../public/');
const viewsPath = path.join(__dirname,'../templates/views/');
const partialsPath = path.join(__dirname,'../templates/partials/');

app.use('/css', express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css/')));
app.use('/js', express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js/')));
app.use('/jq', express.static(path.join(__dirname,'../node_modules/jquery/dist/')));

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(router);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});