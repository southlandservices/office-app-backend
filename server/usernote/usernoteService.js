'use strict';

const models = require('../../models');

const publicAttributes = [
  'id',
  'note',
  'userId',
  'submitterId',
  'createdAt',
  'updatedAt',
  'isAdmin'
];

const baseQuery = {
  attributes: publicAttributes,
  include: [
    {
      model: models.User,
      as: 'user',
      attributes: ['id', 'firstName', 'lastName']
    },
    {
      model: models.User,
      as: 'submitter',
      attributes: ['id', 'firstName', 'lastName']
    }
  ]
};

const getUsernoteByUser = async (userId, role) => {
  if(role === 'Admin') {
    return getAllUserNotesByUser(userId);
  } else {
    return getPublicUserNotesByUser(userId);
  }
}

const getPublicUserNotesByUser = async (userId) => {
  const query = Object.assign(baseQuery, { where: { userId, isAdmin: false } });
  return models.UserNote.findAll(query);
}

const getAllUserNotesByUser = async(userId) => {
  const query = Object.assign(baseQuery, { where: { userId } });
  return models.UserNote.findAll(query);
}

const getUsernoteBySubmitter = async (submitterId) => {
  const query = { where: baseQuery, submitterId };
  return models.UserNote.findAll(query);
}

const getUsernoteById = async (id) => {
  return models.UserNote.findByPk(id, baseQuery);
}

module.exports = {
  getUsernoteByUser,
  getUsernoteBySubmitter,
  getUsernoteById
}