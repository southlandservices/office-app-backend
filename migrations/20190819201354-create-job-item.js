'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inventoryNumber: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      itemCode: {
        type: Sequelize.STRING
      },
      lossCode: {
        type: Sequelize.STRING
      },
      purchaseLocation: {
        type: Sequelize.STRING
      },
      purchaseCost: {
        type: Sequelize.FLOAT
      },
      replacementCost: {
        type: Sequelize.FLOAT
      },
      claimAmount: {
        type: Sequelize.FLOAT
      },
      additionalDescription: {
        type: Sequelize.TEXT
      },
      comments: {
        type: Sequelize.TEXT
      },
      jobId: {
        type: Sequelize.INTEGER
      },
      submitterId: {
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
    return queryInterface.dropTable('JobItems');
  }
};