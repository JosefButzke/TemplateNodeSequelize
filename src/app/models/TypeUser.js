import Sequelize, {Model} from 'sequelize';

class TypeUser extends Model {
    static init(sequelize) {
        super.init(
            {
                type: Sequelize.STRING,
            },
            {
                sequelize
            }
        );
        return this;
    }
}

export default TypeUser;