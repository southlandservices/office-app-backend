'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserNote = sequelize.define('UserNote', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    note: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    submitterId: DataTypes.INTEGER
  }, {});
  UserNote.associate = function (models) {
    // associations can be defined here
    models.UserNote.hasOne(models.User, {
      foreignKey: 'id',
      sourceKey: 'userId',
      as: 'user'
    });
    models.UserNote.hasOne(models.User, {
      foreignKey: 'id',
      sourceKey: 'submitterId',
      as: 'submitter'
    });
  };
  return UserNote;
};