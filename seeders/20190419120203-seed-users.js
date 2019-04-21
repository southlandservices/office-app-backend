'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName:        "Ferdinand",
        lastName:         "Gregory",
        title:            "Adjuster",
        phone1:           "254-790-9289",
        phone2:           "882-587-6372",
        email:            "dictum.magna@faucibusMorbivehicula.ca",
        notes:            "nostra, per inceptos hymenaeos.",
        personalMetadata: "sed dictum eleifend, nunc risus varius",
        role:             1
      },
      {
        firstName:        "Guy",
        lastName:         "Lott",
        title:            "Adjuster",
        phone1:           "692-973-2775",
        phone2:           "957-941-4841",
        email:            "sociis.natoque@CuraeDonec.co.uk",
        notes:            "feugiat placerat",
        personalMetadata: "ipsum ac mi eleifend egestas.",
        role:             4
      },
      {
        firstName:        "Kasper",
        lastName:         "Ballard",
        title:            "Adjuster",
        phone1:           "556-851-0655",
        phone2:           "758-632-4713",
        email:            "tempor.bibendum.Donec@lobortisquam.ca",
        notes:            "urna convallis erat,",
        personalMetadata: "ut",
        role:             2
      },
      {
        firstName:        "Gary",
        lastName:         "May",
        title:            "Adjuster",
        phone1:           "781-848-6254",
        phone2:           "794-628-7002",
        email:            "magna@vitaealiquet.net",
        notes:            "Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.",
        personalMetadata: "et malesuada fames ac turpis egestas.",
        role:             3
      },
      {
        firstName:        "Julian",
        lastName:         "Pierce",
        title:            "Adjuster",
        phone1:           "968-242-1154",
        phone2:           "579-892-5544",
        email:            "lectus.Nullam@pedePraesenteu.ca",
        notes:            "semper et, lacinia",
        personalMetadata: "Mauris quis turpis vitae purus",
        role:             4
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
