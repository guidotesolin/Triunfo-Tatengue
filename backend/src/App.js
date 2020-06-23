const express = require("express");
const app = express();

const RouteMail = require("./routes/RouteEmail.js");
const RoutePrensa = require("./routes/RoutePrensa");

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", RouteMail);
app.use("/prensa", RoutePrensa);

app.use("/", (req, res) => {
  res.send(
    "Modulo backend desarrollado en NodeJS y Express para Agrupacion Triunfo Tatengue"
  );
});

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado en el puerto " + app.get("port"));
});
