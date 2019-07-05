'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClientContactNote = sequelize.define('ClientContactNote', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    note: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
    clientContactId: DataTypes.INTEGER,
    submitterId: DataTypes.INTEGER
  }, {});
  ClientContactNote.associate = function(models) {
    models.ClientContactNote.hasOne(models.ClientContact, {
      foreignKey: 'id',
      sourceKey: 'clientContactId',
      as: 'clientContact'
    });
    models.ClientContactNote.hasOne(models.User, {
      foreignKey: 'id',
      sourceKey: 'submitterId',
      as: 'submitter'
    });
  };
  return ClientContactNote;
};