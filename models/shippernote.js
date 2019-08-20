'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShipperNote = sequelize.define('ShipperNote', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    note: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
    shipperId: DataTypes.INTEGER,
    submitterId: DataTypes.INTEGER
  }, {});
  ShipperNote.associate = function(models) {
    models.ShipperNote.hasOne(models.ShipperCustomer, {
      foreignKey: 'id',
      sourceKey: 'shipperId',
      as: 'shipper'
    });
    models.ShipperNote.hasOne(models.User, {
      foreignKey: 'id',
      sourceKey: 'submitterId',
      as: 'submitter'
    });
  };
  return ShipperNote;
};