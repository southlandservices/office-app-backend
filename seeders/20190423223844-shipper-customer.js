"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ShipperCustomers", [
      {
        firstName: "Amy",
        lastName: "Fowler",
        title: "Mrs.",
        phone1: "254-790-9289",
        phone2: "882-587-6372",
        email1: "dictum.magna@faucibusMorbivehicula.ca",
        email2: "dictum.magna2@faucibusMorbivehicula.ca",
        addressId: 1,
        notes: "nostra, per inceptos hymenaeos.",
        personalMetadata: "sed dictum eleifend, nunc risus varius",
        directions: "go to my house",
        clientId: 1
      },
      {
        firstName: "Taco",
        lastName: "Dan",
        title: "Mr.",
        phone1: "692-973-2775",
        phone2: "957-941-4841",
        email1: "sociis.natoque@CuraeDonec.co.uk",
        email2: "sociis.natoque2@CuraeDonec.co.uk",
        addressId: 2,
        notes: "feugiat placerat",
        personalMetadata: "ipsum ac mi eleifend egestas.",
        directions: "go to my house 2",
        clientId: 4
      },
      {
        firstName: "Bob",
        lastName: "Loblaw",
        title: "Mr.",
        phone1: "556-851-0655",
        phone2: "758-632-4713",
        email1: "tempor.bibendum.Donec@lobortisquam.ca",
        email2: "tempor.bibendum.Donec2@lobortisquam.ca",
        addressId: 3,
        notes: "urna convallis erat,",
        personalMetadata: "ut",
        directions: "go to my house 3",
        clientId: 2
      },
      {
        firstName: "Brian",
        lastName: "May",
        title: "Mr.",
        phone1: "781-848-6254",
        phone2: "794-628-7002",
        email1: "magna@vitaealiquet.net",
        email2: "magna2@vitaealiquet.net",
        addressId: 4,
        notes: "Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.",
        personalMetadata: "et malesuada fames ac turpis egestas.",
        directions: "go to my house 4",
        clientId: 3
      },
      {
        firstName: "Julian",
        lastName: "Pierce",
        title: "Mr.",
        phone1: "968-242-1154",
        phone2: "579-892-5544",
        email1: "lectus.Nullam@pedePraesenteu.ca",
        email2: "lectus.Nullam2@pedePraesenteu.ca",
        addressId: 5,
        notes: "semper et, lacinia",
        personalMetadata: "Mauris quis turpis vitae purus",
        directions: "go to my house 5",
        clientId: 4
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ShipperCustomers", null, {});
  }
};
