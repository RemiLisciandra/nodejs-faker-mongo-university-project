// Importation de la librairie faker et mongodb
const mongoose = require('mongoose');
const { faker } = require("@faker-js/faker");

// import des interfaces
import { Student, StudentSchema } from "./src/models/Student";
import { Evaluation } from "./src/models/Evaluation";

mongoose.set('strictQuery', true);

// Connexion à la base de données
mongoose.connect('mongodb://localhost:2717/university', {
    useNewUrlParser: true,
});

// Initialisation des variables
const students: Student[] = [];

// Parcours des students
for (let i = 0; i < 1000; i++) {
    const evaluations: Evaluation[] = [];
    for (let j = 0; j < 10; j++) {
        const evaluation: Evaluation = {
            value: faker.random.numeric({ min: 0, max: 20 }),
            date: faker.date.between('2022-01-01', '2022-12-31')
        }
        evaluations.push(evaluation);
    }
    const student: Student = {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        gender: faker.name.gender(),
        country: faker.address.country(),
        birthdate: faker.date.between('2002-01-01', '2006-12-31'),
        evaluations: evaluations
    };
    students.push(student);
}