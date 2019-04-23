'use strict';

const models = require('../../models');
const { setAttributes } = require('../utils/serviceHelpers');

const publicAttributes = [
  'id',
  'clientId',
  'firstName',
  'lastName',
  'title',
  'phone1',
  'phone2',
  'email',
  'notes'
];

const privateAttributes = [];

const adminAttributes = publicAttributes.concat(privateAttributes);

const baseQuery = {
  attributes: publicAttributes,
  include: [{
    model: models.Client,
    as: 'client',
    attributes: ['id', 'name']
  }]
};

const getClientContacts = async () => {
  return models.ClientContact.findAll(setAttributes(baseQuery));
}

const getClientContact = async (query) => {
  const parameterizedQuery = Object.assign(baseQuery, { where: query });
  return models.ClientContact.findAll(parameterizedQuery);
}

const getClientContactById = async (id) => {
  return models.ClientContact.findByPk(id, setAttributes(baseQuery));
}

const getClientContactsByClientId = async (clientId) => {
  const parameterizedQuery = Object.assign(setAttributes(baseQuery), { where: { clientId } });
  return models.ClientContact.findAll(parameterizedQuery);
}

module.exports = {
  getClientContacts,
  getClientContact,
  getClientContactById,
  getClientContactsByClientId
}