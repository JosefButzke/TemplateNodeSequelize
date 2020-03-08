import Sequelize from 'sequelize';
import databaseConfig from '../config/config.json';

import TypeUser from '../app/models/TypeUser';
import User from '../app/models/User';
import Address from '../app/models/Address';

const models = [User, Address, TypeUser];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig.development);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();