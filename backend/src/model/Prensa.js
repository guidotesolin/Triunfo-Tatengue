var Sequelize = require("sequelize");
var sequelize = require("./Database.js");

var prensa = sequelize.define(
  "prensa",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    Titulo: Sequelize.STRING,
    Epigrafe: Sequelize.STRING,
    Parrafo: Sequelize.STRING,
    Link: Sequelize.STRING,
    Imagen: Sequelize.STRING,
    Alt: Sequelize.STRING,
    Fecha: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = prensa;
