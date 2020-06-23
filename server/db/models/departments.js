const { STRING, UUID, UUIDV4 } = require('sequelize');
const db = require('../db');
const Department = db.define('department', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    unique: true
  }
});

module.exports = Department;