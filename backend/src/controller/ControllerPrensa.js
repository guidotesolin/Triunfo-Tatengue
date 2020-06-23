const controller = {};
var Prensa = require("../model/Prensa");
var sequelize = require("../model/Database");

controller.list = async (req, res) => {
  const data = await Prensa.findAll()
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: data });
};
module.exports = controller;
