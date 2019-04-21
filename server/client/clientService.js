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

const privateAttributes = [];

const adminAttributes = publicAttributes.concat(privateAttributes);

const baseQuery = {
  attributes: publicAttributes
};

const getClients = async () => {
  return models.Client.findAll(baseQuery);
}

const getClientById = async (id) => {
  return models.Client.findByPk(id, baseQuery);
}

const getClient = async (query) => {
  const parameterizedQuery = Object.assign(baseQuery, { where: query });
  return models.Client.findAll(parameterizedQuery);
}

const buildQuery = (query) => {
  const queryObj = {}
}

module.exports = {
  getClients,
  getClientById,
  getClient
}