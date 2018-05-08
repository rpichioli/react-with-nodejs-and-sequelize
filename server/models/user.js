export default (sequelize, Sequelize) => {
	var User = sequelize.define('user', {
		id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING(150),
            notEmpty: true
        },
		email: {
            type: Sequelize.STRING(300),
            validate: {
                isEmail: true
            }
        },
		username: {
            type: Sequelize.STRING(100),
			allowNull: false
        },
        password: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('A', 'C'),
            defaultValue: 'A'
        }
	}, {
		tableName: 'user'
	});

	return User;
};
