'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Roles', [
        {
          type: 1,
          name: 'Admin'
        },
        {
          type: 2,
          name: "Manager"
        },
        {
          type: 3,
          name: "Customer Service"
        },
        {
          type: 4,
          name: "Tech"
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Roles', null, {});
  }
};
