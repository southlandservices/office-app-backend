'use strict';

const bcrypt = require('bcrypt')
const models = require('../../models');
const Role = models.Role;

const publicAttributes = [
  'id',
  'firstName',
  'lastName',
  'title',
  'phone1',
  'phone2',
  'email',
  'notes',
  'roleId'
];

const privateAttributeSet = [
  'personalMetadata'
];

const adminAttributeSet = [
  'id',
  'email'
];

const authAttributeSet = ['password']

const managerAttributes = publicAttributes.concat(privateAttributeSet);
const adminAttributes = publicAttributes.concat(privateAttributeSet, adminAttributeSet);
const authAttributes = adminAttributeSet.concat(authAttributeSet);

const baseQuery = {
  attributes: publicAttributes,
  include: [{
    model: Role,
    attributes: ['id', 'name']
  }]
};

const saltRounds = 10;

const hashPassword = async (password) => {
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  return hashedPassword
}

const createUser = async (data) => {
  const { email, password } = data;
  const hashedPasword = await hashPassword(password);
  const userData = Object.assign(data, { password: hashedPasword });
  await models.User.create(userData);
  const user = await getUser({ email });
  return user;
}

const setAttributes = (query, role) => {
  let additionalAttributes;
  if (role === 'Manager') { additionalAttributes = managerAttributes }
  if (role === 'Admin') { additionalAttributes = adminAttributes }
  if (additionalAttributes) { query.attributes = additionalAttributes; }
  return query;
}

const updateUser = async (id, data) => {
  return models.User.update(
    { ...data },
    { where: { id } }
  )
}

const getUsers = async () => {
  return models.User.findAll(setAttributes({...baseQuery}));
}

const getUserById = async (id, role) => {
  return models.User.findByPk(id, setAttributes({...baseQuery}, role));
}

const getUser = async (query, role) => {
  const parameterizedQuery = Object.assign(setAttributes({...baseQuery}, role), { where: query });
  return models.User.findAll(parameterizedQuery);
}

const getUserForAuth = async(query) => {
  const parameterizedQuery = Object.assign({...baseQuery}, { attributes: authAttributes, where: query });
  const user = await models.User.findOne(parameterizedQuery);
  return user.dataValues;
}

const deleteUser = async (id) => {
  return models.User.destroy({ where: { id }});
}

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getUserById,
  getUser,
  getUserForAuth,
  deleteUser
}