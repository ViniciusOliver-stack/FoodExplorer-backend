const { Router } = require('express')

const usersRoutes = Router()

const UsersController = require('../controllers/UsersController')
const usersController = new UsersController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.updated)

module.exports = usersRoutes