'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserNotes', [
      {
        note: 'this is a test note',
        userId: 1,
        submitterId: 2
      },
      {
        note: 'this is another test note',
        userId: 1,
        submitterId: 3
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserNotes', null, {});
  }
};
