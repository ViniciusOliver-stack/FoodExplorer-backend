const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')
class UserController {
  async create(request, response) {
    const { name, email, password } = request.body
    const database = await sqliteConnection()

    const checkUserExist = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if(checkUserExist){
      throw new AppError('Este email se encontra em uso.')
    }

    await database.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password])

  }
}

module.exports = UserController
