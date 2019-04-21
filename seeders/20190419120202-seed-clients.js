'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Clients', [
        { name: 'Berger' },
        { name: 'Allied' },
        { name: 'Old Dominion' },
        { name: 'Fisher' }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {});
  }
};
