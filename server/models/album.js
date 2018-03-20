export default (sequelize, Sequelize) => {
	const Album = sequelize.define("album", {
		title: {
			type: Sequelize.STRING(100),
			allowNull: false,
			comment: "Title of the album"
		},
		description: {
			type: Sequelize.STRING(500),
			allowNull: true,
			comment: "Description of the album"
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
		freezeTableName: true
	});

	Album.associate = (models) => {
		Album.belongsTo(models.band, {
			foreignKey: 'band_id'
		});
	}

	return Album;
}
