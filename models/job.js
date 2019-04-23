'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    quantity: DataTypes.INTEGER,
    intakeDate: DataTypes.DATE,
    followpDate: DataTypes.DATE,
    serviceDate: DataTypes.DATE,
    repId: DataTypes.INTEGER, // Southland Rep (User)
    regionTechId: DataTypes.INTEGER, // (User)
    serviceStatusId: DataTypes.INTEGER, 
    addressId: DataTypes.INTEGER, // Address
    clientId: DataTypes.INTEGER, // Client
    shipperId: DataTypes.INTEGER, // ShipperCustomer
    clientRef: DataTypes.STRING,
    encounterFrom: DataTypes.DATE,
    encounterTo: DataTypes.DATE,
    billable: DataTypes.BOOLEAN,
    cost: DataTypes.FLOAT,
    net: DataTypes.FLOAT,
    techAuthLimit: DataTypes.FLOAT
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
    models.Job.hasOne(models.User, {
      foreignKey: 'id',
      as: 'southlandRep'
    });
    models.Job.hasOne(models.Address, {
      foreignKey: 'id',
      as: 'address'
    });
    models.Job.hasOne(models.Client, {
      foreignKey: 'id',
      as: 'client'
    });
    models.Job.hasOne(models.ShipperCustomer, {
      foreignKey: 'id',
      as: 'shipperCustomer'
    })
  };
  return Job;
};