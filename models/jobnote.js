'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobNotes = sequelize.define('JobNote', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    note: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
    jobId: DataTypes.INTEGER,
    submitterId: DataTypes.INTEGER
  }, {});
  JobNotes.associate = function(models) {
    // associations can be defined here
    models.JobNote.hasOne(models.User, {
      foreignKey: 'id',
      sourceKey: 'submitterId',
      as: 'submitter'
    });
    models.JobNote.hasOne(models.Job, {
      foreignKey: 'id',
      sourceKey: 'jobId',
      as: 'job'
    });
  };
  return JobNotes;
};