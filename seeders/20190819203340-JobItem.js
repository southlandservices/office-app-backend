'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('JobItems', [
      {
        inventoryNumber: "123abc",
        quantity: "2",
        itemCode: "zyx code",
        lossCode: "123123",
        purchaseLocation: "Dawsonville, GA",
        purchaseCost: "100",
        replacementCost: "60",
        claimAmount: "60",
        additionalDescription: "description",
        comments: "some more comments",
        jobId: 1,
        submitterId: 1
      },
      {
        inventoryNumber: "456def",
        quantity: "1",
        itemCode: "wvu code",
        lossCode: "321321",
        purchaseLocation: "Atlanta, GA",
        purchaseCost: "200",
        replacementCost: "100",
        claimAmount: "600",
        additionalDescription: "additional description",
        comments: "some more comments for this item",
        jobId: 1,
        submitterId: 1
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('JobItems', null, {});
  }
};
