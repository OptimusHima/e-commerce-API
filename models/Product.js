const sequelize = require('../Database/db')
const {DataTypes} = require('sequelize')

const all_products = sequelize.define("products",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    is_available: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
},{
    freezeTableName: true,
    timestamps: false,
});

module.exports = all_products