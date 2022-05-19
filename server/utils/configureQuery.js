const { Op } = require('sequelize');

function singerQuery(query) {
  const { singerSlice } = query;
  const singerObject = {};

  if (singerSlice) {
    singerObject.name = { [Op.iLike]: singerSlice };
  }

  return singerObject;
}

function songQuery(query) {
  const { songSlice } = query;
  const songObject = {};

  if (songSlice) {
    songObject.name = { [Op.iLike]: songSlice };
  }

  return songObject;
}

module.exports = { singerQuery, songQuery };
