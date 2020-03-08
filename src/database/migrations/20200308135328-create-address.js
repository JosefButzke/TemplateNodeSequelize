'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('addresses', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        neighborhood: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        }, 
        state: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        number: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: { type: Sequelize.DATE, allowNull: false },
        updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('addresses');
  }
};
