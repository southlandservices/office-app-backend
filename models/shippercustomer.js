'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShipperCustomer = sequelize.define('ShipperCustomer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    addressId: DataTypes.INTEGER,
    phone1: DataTypes.STRING,
    phone2: DataTypes.STRING,
    email1: DataTypes.STRING,
    email2: DataTypes.STRING,
    notes: DataTypes.TEXT,
    personalMetadata: DataTypes.TEXT,
    directions: DataTypes.TEXT,
    clientId: DataTypes.INTEGER
  }, {});
  ShipperCustomer.associate = function(models) {
    // associations can be defined here
    models.ShipperCustomer.hasOne(models.Address, {
      foreignKey: 'id',
      sourceKey: 'addressId',
      as: 'address'
    });
    models.ShipperCustomer.hasOne(models.Client, {
      foreignKey: 'id',
      sourceKey: 'clientId',
      as: 'client'
    })
  };
  return ShipperCustomer;
};