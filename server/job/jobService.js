'use strict';

const bcrypt = require('bcrypt')
const models = require('../../models');
// const { setAttributes } = require('../utils/serviceHelpers');

const publicAttributes = [
  'id',
  'intakeDate',
  'followupDate',
  'serviceDate',
  'clientId',
  'shipperId',
  'cost',
  'net'
];

const privateAttributes = [
  'techAuthLimit'
];

const authAttributes = [];

const adminAttributes = publicAttributes.concat(privateAttributes);

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
    {
      model: models.User,
      as: 'southlandRep',
      attributes: ['id', 'firstName', 'lastName']
    },
    {
      model: models.ShipperCustomer,
      as: 'shipperCustomer',
      attributes: ['id', 'firstName', 'lastName']
    }
  ]
};

const setAttributes = (query, role) => {
  let additionalAttributes;
  if (role === 'Manager') { additionalAttributes = managerAttributes }
  if (role === 'Admin') { additionalAttributes = adminAttributes }
  if (additionalAttributes) { query.attributes = additionalAttributes; }
  return query;
}

const getJobs = async () => {
  return models.Jobs.findAll(setAttributes({...baseQuery}));
}

const getJobById = async (id, role) => {
  return models.Job.findByPk(id, setAttributes({...baseQuery}, role));
}

const getJob = async (query, role) => {
  const parameterizedQuery = Object.assign(setAttributes({...baseQuery}, role), { where: query });
  return models.Job.findAll(parameterizedQuery);
}

module.exports = {
  getJobs,
  getJob,
  getJobById
}