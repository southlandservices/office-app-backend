'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      intakeDate: {
        type: Sequelize.DATE
      },
      followupDate: {
        type: Sequelize.DATE,
        type: Sequelize.DATE(3)
      },
      serviceDate: {
        type: Sequelize.DATE,
        type: Sequelize.DATE(3)
      },
      repId: {
        type: Sequelize.INTEGER
      },
      regionTechId: {
        type: Sequelize.INTEGER
      },
      serviceStatusId: {
        type: Sequelize.INTEGER
      },
      addressId: {
        type: Sequelize.INTEGER
      },
      clientId: {
        type: Sequelize.INTEGER
      },
      shipperId: {
        type: Sequelize.INTEGER
      },
      accountingRefId: {
        type: Sequelize.STRING
      },
      encounterFrom: {
        type: Sequelize.DATE,
        type: Sequelize.DATE(3)
      },
      encounterTo: {
        type: Sequelize.DATE,
        type: Sequelize.DATE(3)
      },
      billable: {
        type: Sequelize.BOOLEAN
      },
      cost: {
        type: Sequelize.FLOAT
      },
      net: {
        type: Sequelize.FLOAT
      },
      techAuthLimit: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Jobs');
  }
};