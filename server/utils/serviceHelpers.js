const setAttributes = (q, role = 'Tech') => {
  if (role === 'Admin') {
    q.attributes = adminAttributes;
  }
  return q;
}

module.exports = {
  setAttributes
}