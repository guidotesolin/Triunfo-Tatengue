const express = require("express");
const router = express.Router();
const Controlador = require("../controller/ControllerPrensa");

router.get("/get", Controlador.list);

module.exports = router;
