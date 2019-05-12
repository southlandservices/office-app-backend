'use strict';

const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ClientContacts', [
      {
        id: uuidv4(),
        firstName: "Adam",
        lastName: "Back",
        title: "Adjuster",
        phone1: "254-790-9289",
        phone2: "882-587-6372",
        email: "dictum.magna@faucibusMorbivehicula.ca",
        notes: "nostra, per inceptos hymenaeos.",
        personalMetadata: "sed dictum eleifend, nunc risus varius",
        clientId: 1
      },
      {
        id: uuidv4(),
        firstName: "Hal",
        lastName: "Finney",
        title: "Adjuster",
        phone1: "692-973-2775",
        phone2: "957-941-4841",
        email: "sociis.natoque@CuraeDonec.co.uk",
        notes: "feugiat placerat",
        personalMetadata: "ipsum ac mi eleifend egestas.",
        clientId: 4
      },
      {
        id: uuidv4(),
        firstName: "Wei",
        lastName: "Dai",
        title: "Adjuster",
        phone1: "556-851-0655",
        phone2: "758-632-4713",
        email: "tempor.bibendum.Donec@lobortisquam.ca",
        notes: "urna convallis erat,",
        personalMetadata: "ut",
        clientId: 2
      },
      {
        id: uuidv4(),
        firstName: "Pieter",
        lastName: "Wuillie",
        title: "Adjuster",
        phone1: "781-848-6254",
        phone2: "794-628-7002",
        email: "magna@vitaealiquet.net",
        notes: "Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.",
        personalMetadata: "et malesuada fames ac turpis egestas.",
        clientId: 3
      },
      {
        id: uuidv4(),
        firstName: "Greg",
        lastName: "Maxwell",
        title: "Adjuster",
        phone1: "968-242-1154",
        phone2: "579-892-5544",
        email: "lectus.Nullam@pedePraesenteu.ca",
        notes: "semper et, lacinia",
        personalMetadata: "Mauris quis turpis vitae purus",
        clientId: 4
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ClientContacts', null, {});
  }
};
