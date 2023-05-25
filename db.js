const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const db = new Sequelize('postgres://postgres:postgres@localhost:5432/acme_people_places_things', { logging: false }); //, { logging: false }

const Person = db.define('Person', {
    name : {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});

const Place = db.define('Place', {
    name : {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});

const Thing = db.define('Thing', {
    name : {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});

const Souvenir = db.define('Souvenir');

Souvenir.belongsTo(Thing);
Souvenir.belongsTo(Person);
Souvenir.belongsTo(Place);
Place.hasMany(Souvenir);
Person.hasMany(Souvenir);
Thing.hasMany(Souvenir);
// moe has a hat from london
// moe has a bag from paris
// ethyl has a shirt from nyc


module.exports = {
    db,
    Thing,
    Person,
    Place,
    Souvenir
}