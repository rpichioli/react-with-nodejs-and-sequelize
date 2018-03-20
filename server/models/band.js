export default (sequelize, Sequelize) => {
	const Band = sequelize.define('band', {
		id: {
            type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			comment: "Year of the album"
        },
        title: {
            type: Sequelize.STRING(50),
            notEmpty: true,
			allowNull: false,
			comment: "Year of the album"
        },
		year: {
			type: Sequelize.INTEGER(4),
			notEmpty: true,
			allowNull: false,
			comment: "Year of the album"
		}
	}, {
		tableName: 'band',
		classMethods:{
			associate:function(models){
				Band.hasMany(models.Album);
			}
		}
	});

	return Band;
}
