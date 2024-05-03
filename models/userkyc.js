"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserKyc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserKyc.init(
    {
      user_name: DataTypes.STRING,
      email: DataTypes.STRING,
      pan_number: DataTypes.STRING,
      phone: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "UserKyc",
    }
  );
  return UserKyc;
};
