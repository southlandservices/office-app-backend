'use strict';

const models = require('../../models');
const user = require('../user/userService');
const shipper = require('../shipper/shipperService');
const clientContact = require('../clientContact/clientContactService');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const searchAll = async (query, role) => {
  const { term } = query;
  const userResults = await searchUsers(term, role);
  const shipperResults = await searchShippers(term, role);
  const clientContactResults = await searchClientContacts(term, role);
  const results = {
    users: userResults,
    shippers: shipperResults,
    clientContacts: clientContactResults
  };
  return results;
}

const searchUsers = async(query, role) => {
  const userQuery = {
    [Op.or]: [
      { firstName: { [Op.like]: `%${query}%` } },
      { lastName: { [Op.like]: `%${query}%` } },
      { phone1: { [Op.like]: `%${query}%` } },
      { phone2: { [Op.like]: `%${query}%` } },
      { email: { [Op.like]: `%${query}%` } }
    ]
  }
  return await user.getUser(userQuery, role);
}

const searchShippers = async (query, role) => {
  const shipperQuery = {
    [Op.or]: [
      { firstName: { [Op.like]: `%${query}%` } },
      { lastName: { [Op.like]: `%${query}%` } },
      { phone1: { [Op.like]: `%${query}%` } },
      { phone2: { [Op.like]: `%${query}%` } },
      { email1: { [Op.like]: `%${query}%` } },
      { email2: { [Op.like]: `%${query}%` } }
    ]
  }
  return await shipper.getShipper(shipperQuery, role);
}

const searchClientContacts = async (query, role) => {
  const clientContactQuery = {
    [Op.or]: [
      { firstName: { [Op.like]: `%${query}%` } },
      { lastName: { [Op.like]: `%${query}%` } },
      { phone1: { [Op.like]: `%${query}%` } },
      { phone2: { [Op.like]: `%${query}%` } },
      { email: { [Op.like]: `%${query}%` } }
    ]
  };
  return await clientContact.getClientContact(clientContactQuery, role);
}

module.exports = {
  searchAll
};