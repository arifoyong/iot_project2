'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Record', {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
      },
      recordDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      temp: {
        type: DataTypes.FLOAT,
      },
      humi: {
        type: DataTypes.FLOAT,
      },
      batt: {
        type: DataTypes.FLOAT,
      },
      deviceId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Device',
          key: 'id',
          as: 'deviceId',
        },
      },
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Record');
  }
};