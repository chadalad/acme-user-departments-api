const Sequelize = require('sequelize');
const chalk = require('chalk');
const { User } = require('./models/index')

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/workshop_day_23', {
  logging: false
});

const sync = async (force = false) => {
  try {
    await db.sync({force});
  }
  catch (e) {
    console.log(chalk.red('Failed to sync db'));
    throw e;
  }
};

const usersDb = [
  {
    name: moe,
  }
]

const seed = async () => {
  await async (true);
  await Promise.all(users.map((user) => {
    User.create(user);
  }))
}


module.exports = {
  db
};