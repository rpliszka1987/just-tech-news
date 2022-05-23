const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
// Add express-handlebars after running $ npm i express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.POST || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Add public
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});