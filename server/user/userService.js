'use strict';

const models = require('../../models');

const publicAttributes = [
  'id',
  'firstName',
  'lastName',
  'title',
  'phone1',
  'phone2',
  'email',
  'notes'
];

const privateAttributes = [
  'personalMetaData',
  'role'
];

const adminAttributes = publicAttributes.concat(privateAttributes);

const baseQuery = {
  attributes: publicAttributes,
  include: [{
    model: models.Role,
    as: 'userRole',
    attributes: ['id', 'name']
  }]
};

const getUsers = async () => {
  return models.User.findAll(setAttributes(baseQuery));
}

const getUserById = async (id) => {
  return models.User.findByPk(id, setAttributes(baseQuery));
}

const getUser = async (query) => {
  const parameterizedQuery = Object.assign(setAttributes(baseQuery), { where: query });
  return models.User.findAll(parameterizedQuery);
}

const setAttributes = (q, role = 'Tech') => {
  if(role === 'Admin') {
    q.attributes = adminAttributes;
  }
  return q;
}

module.exports = {
  getUsers,
  getUserById,
  getUser
}