const express = require('express');
const path = require('path');
const chalk = require('chalk');
const { Users, Department } = require('./db/models/index');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(require('cors')());

app.get('/api/users/:id', async (req, res) => {
  const userID = req.params.id;
  try {
    console.log(chalk.magenta(req));
    const user = await Users.findOne({ where: { id: userID }});
  }
  catch (e) {
    console.log(chalk.yellow('API get error'));
    throw e;
  }
});

app.listen(PORT);
