const { Router } = require("express");

const CartsController = require("../controllers/CartsController");

const cartsRoutes = Router();

const cartsController = new CartsController();

cartsRoutes.post("/:user_id", cartsController.create);
cartsRoutes.get('/:id', cartsController.show)


module.exports = cartsRoutes;