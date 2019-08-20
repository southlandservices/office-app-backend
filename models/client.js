'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    name: DataTypes.STRING
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
    Client.hasMany(models.ClientContact)
  };
  return Client;
};