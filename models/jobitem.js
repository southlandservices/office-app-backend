'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobItem = sequelize.define('JobItem', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    inventoryNumber: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    itemCode: DataTypes.STRING,
    lossCode: DataTypes.STRING,
    purchaseLocation: DataTypes.STRING,
    purchaseCost: DataTypes.FLOAT,
    replacementCost: DataTypes.FLOAT,
    claimAmount: DataTypes.FLOAT,
    additionalDescription: DataTypes.TEXT,
    comments: DataTypes.TEXT,
    // for associations
    jobId: DataTypes.INTEGER,
    submitterId: DataTypes.INTEGER
  }, {});
  JobItem.associate = function(models) {
    // associations can be defined here
    models.JobItem.hasOne(models.Job, {
      foreignKey: 'id',
      sourceKey: 'jobId',
      as: 'job'
    });
  };
  return JobItem;
};