'use strict'

const models = require('../../models');

const publicAttributes = [
  'id',
  'name'
];

const managerAttributes = [];
const adminAttributes = [];
const authAttributes = [];

const baseQuery = {
  attributes: publicAttributes
};

const getRoles = async () => {
  return models.Role.findAll(baseQuery);
}

const getRole = async (query, role) => {
  const parameterizedQuery = Object.assign(baseQuery, { where: query });
  return models.Role.findAll(parameterizedQuery);
}

module.exports = {
  getRoles,
  getRole
}