'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Jobs', [
        {
          quantity: '1',
          intakeDate: '2019-04-13 20:19:09.961',
          followpDate: '2019-04-23 20:19:09.961',
          serviceDate: '2019-04-20 20:19:09.961',
          repId: '1', // Southland Rep (User)
          regionTechId: '1', // (User)
          serviceStatusId: '1',
          addressId: '1', // Address
          clientId: '1', // Client
          shipperId: '1', // ShipperCustomer
          clientRef: 'dunno',
          encounterFrom: '2019-04-23 20:19:09.961',
          encounterTo: '2019-04-23 20:19:09.961',
          billable: true,
          cost: '100.00',
          net: '50.00',
          techAuthLimit: '50.00'
        },
        {
          quantity: '1',
          intakeDate: '2019-04-12 20:19:09.961',
          followpDate: '2019-04-22 20:19:09.961',
          serviceDate: '2019-04-19 20:19:09.961',
          repId: '2', // Southland Rep (User)
          regionTechId: '2', // (User)
          serviceStatusId: '2',
          addressId: '2', // Address
          clientId: '2', // Client
          shipperId: '2', // ShipperCustomer
          clientRef: 'dunno 2',
          encounterFrom: '2019-04-22 20:19:09.961',
          encounterTo: '2019-04-22 20:19:09.961',
          billable: true,
          cost: '200.00',
          net: '150.00',
          techAuthLimit: '150.00'
        },
        {
          quantity: '1',
          intakeDate: '2019-04-11 20:19:09.961',
          followpDate: '2019-04-11 20:19:09.961',
          serviceDate: '2019-04-18 20:19:09.961',
          repId: '3', // Southland Rep (User)
          regionTechId: '3', // (User)
          serviceStatusId: '3',
          addressId: '3', // Address
          clientId: '3', // Client
          shipperId: '3', // ShipperCustomer
          clientRef: 'dunno 3',
          encounterFrom: '2019-04-21 20:19:09.961',
          encounterTo: '2019-04-21 20:19:09.961',
          billable: true,
          cost: '300.00',
          net: '250.00',
          techAuthLimit: '250.00'
        },        
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jobs', null, {});
  }
};
