const { Op } = require('sequelize');

function singerQuery(query) {
  const { singerSlice } = query;
  const singerObject = {};

  if (singerSlice) {
    singerObject.name = { [Op.substring]: singerSlice };
  }

  return singerObject;
}

function songQuery(query) {
  const { songSlice } = query;
  const songObject = {};

  if (songSlice) {
    songObject.name = { [Op.substring]: songSlice };
  }

  return songObject;
}

module.exports = { singerQuery, songQuery };
