'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ClientContactNotes', [
      {
        note: 'this is a test note',
        clientContactId: 1,
        submitterId: 2,
        isAdmin: false
      },
      {
        note: 'this is another test note',
        clientContactId: 1,
        submitterId: 3,
        isAdmin: false,
      },
      {
        note: 'This is a really long ADMIN NOTE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        clientContactId: 1,
        submitterId: 4,
        isAdmin: true,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ClientContactNotes', null, {});
  }
};
