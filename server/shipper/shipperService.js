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

const baseInclude = [
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
];

const fullInclude = baseInclude.slice();
fullInclude.push({
  model: models.Job,
  attributes: ['id']
});

const baseQuery = {
  attributes: publicAttributes,
  include: baseInclude
}

const fullQuery = Object.assign(baseQuery, {
  include: fullInclude
});

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
  const parameterizedQuery = Object.assign(setAttributes({...fullQuery}, role), { where: query });
  return models.ShipperCustomer.findAll(parameterizedQuery);
}

const createShipper = async(data) => {
  const shipper = await models.ShipperCustomer.create(data);
  return shipper;
}

module.exports = {
  getShippers,
  getShipper,
  getShipperById,
  createShipper
}