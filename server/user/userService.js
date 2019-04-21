'use strict';

const bcrypt = require('bcrypt')
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

const saltRounds = 10;

const hashPassword = async (password) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return hash;
    })
  })
}

const createUser = async (data) => {
  const { email, password } = data;
  const hashedPasword = await hashPassword(password);
  const userData = Object.assign(data, { password: hashedPasword });
  await models.User.create(userData);
  const user = await getUser({ email });
  return user;
}

const updateUser = async (id, data) => {
  return models.User.update(
    { ...data },
    { where: { id } }
  )
}

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

const deleteUser = async (id) => {
  return models.User.destroy({ where: { id }});
}

const setAttributes = (q, role = 'Tech') => {
  if(role === 'Admin') {
    q.attributes = adminAttributes;
  }
  return q;
}

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getUserById,
  getUser,
  deleteUser
}