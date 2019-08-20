'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Roles', [
        {
          name: 'Admin'
        },
        {
          name: "Manager"
        },
        {
          name: "Customer Service"
        },
        {
          name: "Tech"
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Roles', null, {});
  }
};
