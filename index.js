"use strict";
exports.__esModule = true;
// Importation de la librairie faker et mongodb
var mongoose = require('mongoose');
var faker = require("@faker-js/faker").faker;
mongoose.set('strictQuery', true);
// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/university', {
    useNewUrlParser: true
});
// Initialisation des variables
var students = [];
// Parcours des students
for (var i = 0; i < 1000; i++) {
    var evaluations = [];
    for (var j = 0; j < 10; j++) {
        var evaluation = {
            value: faker.random.numeric({ min: 0, max: 20 }),
            date: faker.date.between('2022-01-01', '2022-12-31')
        };
        evaluations.push(evaluation);
    }
    var student = {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        gender: faker.name.gender(),
        country: faker.address.country(),
        birthdate: faker.date.between('2002-01-01', '2006-12-31'),
        evaluations: evaluations
    };
    students.push(student);
}
