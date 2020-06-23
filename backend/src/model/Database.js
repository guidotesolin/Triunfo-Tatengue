var Sequelize = require("sequelize");
const creds = require("../config/db");

const sequelize = new Sequelize(
  "triunfotatengue_datos",
  creds.user,
  creds.pass,
  {
    dialect: "mariadb",
    host: "167.114.32.111", //Shared IP Adress en el costado derecho del cpanel
    dialectOptions: { connectTimeout: 1000 },
  }
);
module.exports = sequelize;
