'use strict';

const models = require('../../models');

const publicAttributes = [
  'id',
  'note',
  'clientContactId',
  'submitterId',
  'createdAt',
  'updatedAt',
  'isAdmin'
];

const baseQuery = {
  attributes: publicAttributes,
  include: [
    {
      model: models.ClientContact,
      as: 'clientContact',
      attributes: ['id', 'firstName', 'lastName']
    },
    {
      model: models.User,
      as: 'submitter',
      attributes: ['id', 'firstName', 'lastName']
    }
  ]
};

const getClientContactNoteByClientContactId = async (clientContactId, role) => {
  if (role === 'Admin') {
    return getAllNotesByClientContactId(clientContactId);
  } else {
    return getPublicNotesByClientContactId(clientContactId);
  }
}

const getPublicNotesByClientContactId = async (clientContactId) => {
  const query = Object.assign(baseQuery, { where: { clientContactId, isAdmin: false } });
  return models.ClientContactNote.findAll(query);
}

const getAllNotesByClientContactId = async (clientContactId) => {
  const query = Object.assign(baseQuery, { where: { clientContactId } });
  return models.ClientContactNote.findAll(query);
}

const getClientContactNoteBySubmitter = async (submitterId) => {
  const query = { where: baseQuery, submitterId };
  return models.ClientContactNote.findAll(query);
}

const getClientContactNoteById = async (id) => {
  return models.ClientContactNote.findByPk(id, baseQuery);
}

const createClientContactNote = async (data) => {
  const note = await models.ClientContactNote.create(data);
  return note;
}

const updateClientContactNote = async (id, data, submitterId) => {
  const { note } = data;
  await models.ClientContactNote.update(
    { note, submitterId },
    { where: { id } }
  );
  return await getClientContactNoteById(id);
}

const deleteClientContactNote = async (clientContactId, id) => {
  return models.ClientContactNote.destroy({ where: { id, clientContactId } });
}

module.exports = {
  getClientContactNoteByClientContactId,
  getClientContactNoteBySubmitter,
  getClientContactNoteById,
  createClientContactNote,
  updateClientContactNote,
  deleteClientContactNote
}