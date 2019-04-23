'use strict';

const models = require('../../models');
const { setAttributes } = require('../utils/serviceHelpers');
const clientContactService = require('../clientContact/clientContactService');

const publicAttributes = [
  'id',
  'name'
];

const privateAttributes = [];

const adminAttributes = publicAttributes.concat(privateAttributes);

const baseQuery = {
  attributes: publicAttributes
};

const getClients = async () => {
  return models.Client.findAll(setAttributes(baseQuery));
}

const getClientById = async (id) => {
  return models.Client.findByPk(id, baseQuery);
}

const getClient = async (query) => {
  const parameterizedQuery = Object.assign(baseQuery, { where: query });
  return models.Client.findAll(parameterizedQuery);
}

const getClientContactsByClientId = async (id) => {
  return clientContactService.getClientContactsByClientId(id);
}

const getClientContactByContactId = async (contactId) => {
  return clientContactService.getClientContactById(contactId);
}

module.exports = {
  getClients,
  getClientById,
  getClient,
  getClientContactsByClientId,
  getClientContactByContactId
}