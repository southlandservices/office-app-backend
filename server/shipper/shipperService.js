'use strict';

const bcrypt = require('bcrypt')
const models = require('../../models');

const publicAttributes = [
  'id',
  'firstName',
  'lastName',
  'title',
  'addressId',
  'clientId',
  'phone1',
  'phone2',
  'email1',
  'email2',
  'notes',
  'directions'
];

const privateAttributeSet = [];
const adminAttributeSet = ['personalMetadata'];

const adminAttributes = publicAttributes.concat(adminAttributeSet);

const baseQuery = {
  attributes: publicAttributes,
  include: [
    {
      model: models.Address,
      as: 'address',
      attributes: ['id', 'address1', 'address2', 'city', 'state', 'zip']
    },
    {
      model: models.Client,
      as: 'client',
      attributes: ['id', 'name']
    },
  ]
}

const setAttributes = (query, role) => {
  let additionalAttributes;
  if (role === 'Manager') { additionalAttributes = managerAttributes }
  if (role === 'Admin') { additionalAttributes = adminAttributes }
  if (additionalAttributes) { query.attributes = additionalAttributes; }
  return query;
}

const getShippers = async () => {
  return models.ShipperCustomer.findAll(setAttributes({...baseQuery}));
}

const getShipperById = async (id, role) => {
  return models.ShipperCustomer.findByPk(id, setAttributes({...baseQuery}, role));
}

const getShipper = async (query, role) => {
  const parameterizedQuery = Object.assign(setAttributes({...baseQuery}, role), { where: query });
  return models.ShipperCustomer.findAll(parameterizedQuery);
}

module.exports = {
  getShippers,
  getShipper,
  getShipperById
}