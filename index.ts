// Importation de la librairie faker et mongodb
const mongoose = require('mongoose');
const {faker} = require("@faker-js/faker");

const StudentModel = require('src/models/Student');

mongoose.set('strictQuery', true);

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/university', {
    useNewUrlParser: true,
});

// Parcours des students
async function main() {
    let firstname = faker.name.firstName();
    let lastName = faker.name.lastName();
    let gender = faker.name.sexType();
    let country = faker.address.country();
    let birthdate = faker.date.birthdate();

    const newStudent = new StudentModel({
        firstname: firstname,
        lastname: lastName,
        gender: gender,
        country: country,
        birthdate: birthdate
    });
    await newStudent.save();
}

main().catch(err => console.log(err));