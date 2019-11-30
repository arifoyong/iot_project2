'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Device', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      location: {
        type: DataTypes.STRING,
      },
      alertActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      temp_unit: {
        type: DataTypes.STRING,
        defaultValue: "C",
      },
      temp_ucl: {
        type: DataTypes.FLOAT,
        defaultValue: 30,
      },
      temp_lcl: {
        type: DataTypes.FLOAT,
        defaultValue: 20,
      },
      humi_unit: {
        type: DataTypes.STRING,
        defaultValue: "%",
      },
      humi_ucl: {
        type: DataTypes.FLOAT,
        defaultValue: 90,
      },
      humi_lcl: {
        type: DataTypes.FLOAT,
        defaultValue: 50,
      },
      batt_unit: {
        type: DataTypes.STRING,
        defaultValue: "V",
      },
      batt_ucl: {
        type: DataTypes.FLOAT,
        defaultValue: 100,
      },
      batt_lcl: {
        type: DataTypes.FLOAT,
        defaultValue: 10,
      }
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Device');
  }
};