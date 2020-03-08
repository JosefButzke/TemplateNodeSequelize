'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('type_users', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: { type: Sequelize.DATE, allowNull: false },
        updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('type_users');
  }
};
