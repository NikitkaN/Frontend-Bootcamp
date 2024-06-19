const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const { sequelize } = require('./models');
const routes = require('./routes/routes.js');
const path = require('path');
const controller = require('./controllers/controller');
const router = express.Router();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(session({
  store: new FileStore(),
  secret: 'SAMURAI',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000
  }
}));

hbs.registerPartials(`${__dirname}/partials`);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(routes);

app.get('/menu', (req, res) => {
  res.render('menu');
});

app.get('/signIn', (req, res) => {
  res.render('signIn');
});

app.get('/signUp', (req, res) => {
  res.render('signUp');
});

async function startServer() {
  try {
    await sequelize.sync();
    console.log('Database migrated successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error migrating database:', error);
  }
}

startServer();