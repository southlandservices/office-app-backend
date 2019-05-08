'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    phone1: DataTypes.STRING,
    phone2: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
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