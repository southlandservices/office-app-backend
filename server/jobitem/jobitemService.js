'use strict';

const models = require('../../models');

const publicAttributes = [
  'id',
  'inventoryNumber',
  'quantity',
  'itemCode',
  'lossCode',
  'purchaseLocation',
  'purchaseCost',
  'replacementCost',
  'claimAmount',
  'additionalDescription',
  'comments',
  'jobId',
  'submitterId'
];

const baseQuery = {
  attributes: publicAttributes,
  include: [
    {
      model: models.Job,
      as: 'job',
      attributes: ['id']
    }
  ]
};

const getJobItemsByJobId = async (jobId, role) => {
  const query = Object.assign(baseQuery, { where: { jobId } });
  return models.JobItem.findAll(query);
}

const getJobItemById = async(id) => {
  const jobItem = await models.JobItem.findByPk(id, baseQuery);
  return jobItem;
}

const createJobItem = async (data) => {
  const jobItem = await models.JobItem.create(data);
  return jobItem;
}

const updateJobItem = async(id, data) => {
  const { jobItem } = data;
  await models.JobItem.update(jobItem, { where: { id } });
  return await getJobItemById(id);
}

const deleteJobItem = async (id) => {
  return models.JobItem.destroy({ where: { id } });
}

module.exports = {
  getJobItemsByJobId,
  getJobItemById,
  createJobItem,
  updateJobItem,
  deleteJobItem
}