'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    phone1: DataTypes.STRING,
    phone2: DataTypes.STRING,
    email: DataTypes.STRING,
    notes: DataTypes.STRING,
    personalMetadata: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasOne(models.Role, {
      foreignKey: 'id',
      as: 'userRole'
    });
  };
  return User;
};