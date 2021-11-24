import { Model, DataTypes } from 'sequelize';
import db from '../../config/db';

class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                email: DataTypes.STRING,
                password: DataTypes.STRING,
            },
            { sequelize, modelName: 'User' }
        );
    }

    // static associate(models) {
    //     this.hasMany(models.Book, { as: 'books' });
    //     return this;
    // }
}

User.init(db.sequelize);

export default User;