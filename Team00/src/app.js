const express = require('express');
const hbs = require('hbs');
// const { sequelize } = require('./models');
const routes = require('./routes/routes.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

hbs.registerPartials(`${__dirname}/partials`);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(routes);

async function startServer() {
    try {
    //   await sequelize.sync();
    //   console.log('Database migrated successfully.');
  
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('Error migrating database:', error);
    }
}
  
startServer();