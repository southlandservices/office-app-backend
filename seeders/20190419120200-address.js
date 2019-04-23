'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [
      {
        address1: '123 First St.',
        address2: '',
        city: 'Atlanta',
        state: 'GA',
        zip: '30303'
      },
      {
        address1: '234 Second St.',
        address2: '',
        city: 'New York',
        state: 'NY',
        zip: '20202'
      },
      {
        address1: '345 Third St.',
        address2: '',
        city: 'Seattle',
        state: 'WA',
        zip: '10101'
      },
      {
        address1: '456 Fouth St.',
        address2: '',
        city: 'San Francisco',
        state: 'CA',
        zip: '40404'
      },
      {
        address1: '567 Fifth St.',
        address2: '',
        city: 'Boston',
        state: 'MA',
        zip: '50505'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Addresses', null, {});
  }
};
