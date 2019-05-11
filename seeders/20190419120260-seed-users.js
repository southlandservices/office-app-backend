'use strict';

const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        firstName:        "Ferdinand",
        lastName:         "Gregory",
        title:            "Adjuster",
        phone1:           "254-790-9289",
        phone2:           "882-587-6372",
        email:            "dictum.magna@faucibusMorbivehicula.ca",
        password:         "$2a$10$RKxQRO4rS0Wf/1Jdq6RaXuLoJQx8bfPpZTlVv6zKzdxhStPVNZW22", //foo
        notes:            "nostra, per inceptos hymenaeos.",
        personalMetadata: "sed dictum eleifend, nunc risus varius",
        roleId:             1
      },
      {
        id: uuidv4(),
        firstName:        "Guy",
        lastName:         "Lott",
        title:            "Adjuster",
        phone1:           "692-973-2775",
        phone2:           "957-941-4841",
        email:            "sociis.natoque@CuraeDonec.co.uk",
        password:         "$2a$10$sjOS.pSm6QdL6PeXTTuh2O8ciNA9VXRqM4HcmkDVC/Yg3sb8SlHd6", // bar
        notes:            "feugiat placerat",
        personalMetadata: "ipsum ac mi eleifend egestas.",
        roleId:             4
      },
      {
        id: uuidv4(),
        firstName:        "Kasper",
        lastName:         "Ballard",
        title:            "Adjuster",
        phone1:           "556-851-0655",
        phone2:           "758-632-4713",
        email:            "tempor.bibendum.Donec@lobortisquam.ca",
        password:         "$2a$10$hScv9qZieA4Pg8w84TIAl.cG6LhmGooVg/Psknmg5Vd3jVWBF8hFm", // baz
        notes:            "urna convallis erat,",
        personalMetadata: "ut",
        roleId:             2
      },
      {
        id: uuidv4(),
        firstName:        "Gary",
        lastName:         "May",
        title:            "Adjuster",
        phone1:           "781-848-6254",
        phone2:           "794-628-7002",
        email:            "magna@vitaealiquet.net",
        password:         "$2a$10$pUbIWezSOQS0vWIbgn1wXeZP5jHm9E2H3kbpW4f2lj3FWqcrMrbr2", // taco
        notes:            "Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.",
        personalMetadata: "et malesuada fames ac turpis egestas.",
        roleId:             3
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
