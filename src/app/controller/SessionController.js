// import jwt from 'jsonwebtoken';
import User from '../models/User';
import Address from '../models/Address';
import TypeUser from '../models/TypeUser'

class SessionController {
    async store(req, res) {
        const { nome, phone, email, type_user, address } = req.body;
        res.json({ nome, phone, email, type_user, address })
    }
}

export default new SessionController();