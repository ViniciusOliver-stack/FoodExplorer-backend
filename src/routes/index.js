const { Router } = require("express");

const cartsRouter = require("./carts.routes");
const usersRouter = require("./users.routes");

const routes = Router();

routes.use("/carts", cartsRouter)
routes.use("/users", usersRouter)

module.exports = routes;