export default (sequelize, Sequelize) => {
	const Album = sequelize.define("album", {
		id: {
            type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			comment: "PK of the table"
        },
		band_id: {
            type: Sequelize.INTEGER,
			allowNull: false,
			comment: "FK to the band PK table"
        },
		title: {
			type: Sequelize.STRING(100),
			allowNull: false,
			comment: "Title of the album"
		},
		cover: {
			type: Sequelize.STRING(150),
			allowNull: false,
			comment: "Image URL"
		},
		year: {
			type: Sequelize.STRING(4),
			allowNull: true,
			comment: "Year of the album"
		}
	}, {
		tableName: "album",
		classMethods:{
			associate:function(models){
				Album.belongsTo(models.Band, {
					foreignKey: 'band_id',
					foreignKeyConstraint: true
				});
			}
		}
	});

	return Album;
}
