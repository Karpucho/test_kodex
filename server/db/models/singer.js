const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Singer extends Model {
    static associate({ Song }) {
      Singer.hasMany(Song, { foreignKey: 'singer_id', onDelete: 'CASCADE', hooks: true });
    }
  }
  Singer.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Singer',
  });
  return Singer;
};
