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

const createJobnote = async (data) => {
  const note = await models.JobNote.create(data);
  return note;
}

const updateJobnote = async (id, data, submitterId) => {
  const { note } = data;
  await models.JobNote.update(
    { note, submitterId },
    { where: { id } }
  );
  return await getJobnoteById(id);
}

const deleteJobnote = async (id) => {
  return models.JobNote.destroy({ where: { id } });
}

module.exports = {
  getJobnoteByJob,
  getJobnoteBySubmitter,
  getJobnoteById,
  createJobnote,
  updateJobnote,
  deleteJobnote
}