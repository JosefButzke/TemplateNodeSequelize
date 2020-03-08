import Sequelize, {Model} from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                phone: Sequelize.STRING,
                email: Sequelize.STRING,
            },
            {
                sequelize
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Address, {
            foreignKey: 'id', as: 'address_id'
        });
        this.belongsTo(models.TypeUser, {
            foreignKey: 'id', as: 'type_user_id'
        });
    }
}

export default User;