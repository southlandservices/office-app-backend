'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClientContact = sequelize.define('ClientContact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    phone1: DataTypes.STRING,
    phone2: DataTypes.STRING,
    fax: DataTypes.STRING,
    email: DataTypes.STRING,
    notes: DataTypes.STRING,
    personalMetadata: DataTypes.STRING,
    client: DataTypes.INTEGER
  }, {});
  ClientContact.associate = function(models) {
    // associations can be defined here
  };
  return ClientContact;
};