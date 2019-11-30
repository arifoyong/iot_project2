'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
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
  }, {
    freezeTableName: true,
    timestamps: false
  });
  Record.associate = function (models) {
    Record.belongsTo(models.Device, {
      foreignKey: 'deviceId',
      onDelete: 'CASCADE'
    })
  };
  return Record;
};