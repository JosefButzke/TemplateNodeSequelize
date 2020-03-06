// import jwt from 'jsonwebtoken';

class SessionController {
    async store(req, res) {
        return res.json({message: req.body.message})
    }
}

module.exports = new SessionController();