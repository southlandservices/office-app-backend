'use strict';

const models = require('../../models');

const publicAttributes = [
  'id',
  'note',
  'jobId',
  'submitterId',
  'createdAt',
  'updatedAt',
  'isAdmin'
];

const baseQuery = {
  attributes: publicAttributes,
  include: [
    {
      model: models.Job,
      as: 'job',
      attributes: ['id']
    },
    {
      model: models.User,
      as: 'submitter',
      attributes: ['id', 'firstName', 'lastName']
    }
  ]
};

const getJobnoteByJob = async (jobId, role) => {
  if (role === 'Admin') {
    return getAllJobnotesByJob(jobId);
  } else {
    return getPublicJobnotesByJob(jobId);
  }
}

const getPublicJobnotesByJob = async (jobId) => {
  const query = Object.assign(baseQuery, { where: { jobId, isAdmin: false } });
  return models.JobNote.findAll(query);
}

const getAllJobnotesByJob = async (jobId) => {
  const query = Object.assign(baseQuery, { where: { jobId } });
  return models.JobNote.findAll(query);
}

const getJobnoteBySubmitter = async (submitterId) => {
  const query = { where: baseQuery, submitterId };
  return models.JobNote.findAll(query);
}

const getJobnoteById = async (id) => {
  return models.JobNote.findByPk(id, baseQuery);
}

module.exports = {
  getJobnoteByJob,
  getJobnoteBySubmitter,
  getJobnoteById
}