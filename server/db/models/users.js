const { STRING, UUID, UUIDV4, VIRTUAL } = require('sequelize');
const Department = require('./departments');
const db = require('../db');
const User = db.define('user', {
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
  },
  departmentId: {
    type: VIRTUAL,
    get: function() {
      const id = this.get('id');
      return User.findByPk(id, { include: [Department] })        
        .then(({ id }) => id);
    }, 
  },

});

module.exports = User;
