'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShipperCustomer = sequelize.define('ShipperCustomer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    phone1: DataTypes.STRING,
    phone2: DataTypes.STRING,
    fax: DataTypes.STRING,
    email: DataTypes.STRING,
    notes: DataTypes.TEXT,
    personalMetadata: DataTypes.TEXT,
    clientId: DataTypes.INTEGER
  }, {});
  ShipperCustomer.associate = function(models) {
    // associations can be defined here
  };
  return ShipperCustomer;
};