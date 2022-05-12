const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    static associate({ Singer }) {
      Song.belongsTo(Singer, { foreignKey: 'singer_id' });
    }
  }
  Song.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      unique: 'compositeIndex',
      type: DataTypes.TEXT,
    },
    singer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'compositeIndex',
      references: {
        model: 'Singers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};
