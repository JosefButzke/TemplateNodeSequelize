// import jwt from 'jsonwebtoken';
const sequelize = require('../../database/index')
class SessionController {
    async store(req, res) {
        sequelize;
        return res.json({message: req.body.message})
    }
}

module.exports = new SessionController();