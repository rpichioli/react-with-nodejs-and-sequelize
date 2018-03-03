export default (sequelize, Sequelize) => {
	var Band = sequelize.define('band', {
		id: {
            type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
        },
        title: {
            type: Sequelize.STRING(50),
            notEmpty: true,
			allowNull: false
        },
		year: {
			type: Sequelize.INTEGER(4),
			notEmpty: true,
			allowNull: false
		}
	}, {
		tableName: 'band'
	});

	return Band;
}
