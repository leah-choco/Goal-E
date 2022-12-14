//Future option for development
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Checklist extends Model {}

Checklist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    goals_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "goals",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "checklist",
  }
);

module.exports = Checklist;
