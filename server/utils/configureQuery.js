const { Op } = require('sequelize');

function singerQuery(query) {
  const { singerSlice } = query;
  const obj = {};
  obj.name = { [Op.substring]: singerSlice };
  return obj;
}

function songQuery(query) {
  const { songSlice } = query;
  const obj = {};
  obj.name = { [Op.substring]: songSlice };
  return obj;
}

module.exports = { singerQuery, songQuery };
