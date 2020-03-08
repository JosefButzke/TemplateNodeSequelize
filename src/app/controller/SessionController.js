// import jwt from 'jsonwebtoken';
import User from '../models/User';
import Address from '../models/Address';
import TypeUser from '../models/TypeUser'

class SessionController {
    async index(req, res) {
        const response = await User.findAndCountAll({
            include: [{ model: Address, as: 'address_id' }, { model: TypeUser, as: 'type_user_id' }],
            
        });
        return res.json(response)
    }
}

export default new SessionController();