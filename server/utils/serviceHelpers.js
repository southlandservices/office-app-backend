const setAttributes = (q, role) => {
  if (role === 'Admin') {
    q.attributes = adminAttributes;
  }
  return q;
}

module.exports = {
  setAttributes
}