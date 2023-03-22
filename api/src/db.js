const dotenv = require('dotenv') 
const { Sequelize } = require('sequelize') 
dotenv.config()

// MODELS
const {
    Rsvp
} = require('./models/Rsvp')

// 5432
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const db = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
	{
		logging: false, // set to console.log to see the raw SQL queries
		native: false, // lets Sequelize know we can use pg-native for ~30% more speed
	}
);

Rsvp(db);

const { rsvp } = db.models;

module.exports = {
	...db.models,
	conn: db,
};