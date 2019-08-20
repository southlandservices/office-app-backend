'use strict';

const models = require('../../models');
const Client = models.Client;

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

const privateAttributeSet = [];

const adminAttributeSet = [
  'personalMetadata'
]

const privateAttributes = publicAttributes.concat(privateAttributeSet);
const managerAttributes = publicAttributes.concat(privateAttributeSet);
const adminAttributes = publicAttributes.concat(privateAttributeSet, adminAttributeSet);

const baseQuery = {
  attributes: publicAttributes,
  include: [{
    model: Client,
    attributes: ['id', 'name']
  }]
};

const setAttributes = (query, role) => {
  let additionalAttributes;
  if (role === 'Manager') { additionalAttributes = managerAttributes }
  if (role === 'Admin') { additionalAttributes = adminAttributes }
  if (additionalAttributes) { query.attributes = additionalAttributes; }
  return query;
}

const getClientContacts = async () => {
  return models.ClientContact.findAll(setAttributes({...baseQuery}));
}

const getClientContact = async (query, role) => {
  const parameterizedQuery = Object.assign(setAttributes({...baseQuery}, role), { where: query });
  return models.ClientContact.findAll(parameterizedQuery);
}

const getClientContactById = async (id, role) => {
  return models.ClientContact.findByPk(id, setAttributes({...baseQuery}, role));
}

const getClientContactsByClientId = async (clientId) => {
  const parameterizedQuery = Object.assign(setAttributes({...baseQuery}), { where: { clientId } });
  return models.ClientContact.findAll(setAttributes(parameterizedQuery));
}

module.exports = {
  getClientContacts,
  getClientContact,
  getClientContactById,
  getClientContactsByClientId
}