const express = require('express');
const { sequelize } = require('./models');
const routes = require('./routes/routes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
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