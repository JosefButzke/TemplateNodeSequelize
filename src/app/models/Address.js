import Sequelize, {Model} from 'sequelize';

class Address extends Model {
    static init(sequelize) {
        super.init(
            {
                street: Sequelize.STRING,
                neighborhood: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                number: Sequelize.STRING,
            },
            {
                sequelize
            }
        );
        return this;
    }
}

export default Address;