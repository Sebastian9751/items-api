import { DataTypes } from 'sequelize';
import { Connection } from '../database/index.js';

export const ItemModel = Connection.define(
    'Items',
    {
        id_item: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        tableName: 'items',
        timestamps: false,
        freezeTableName: true,
    }
);
