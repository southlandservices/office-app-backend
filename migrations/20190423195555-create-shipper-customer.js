'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ShipperCustomers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      phone1: {
        type: Sequelize.STRING
      },
      phone2: {
        type: Sequelize.STRING
      },
      fax: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
      },
      personalMetadata: {
        type: Sequelize.TEXT
      },
      clientId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ShipperCustomers');
  }
};