const { DataTypes } = require('sequelize');

const rsvp = (sequelize) => {

	sequelize.define('rsvp', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mail: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		attending: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		vegan: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		vegetarian: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		other: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};

module.exports = rsvp;