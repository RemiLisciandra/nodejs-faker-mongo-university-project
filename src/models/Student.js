"use strict";
exports.__esModule = true;
exports.StudentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.StudentSchema = new mongoose_1.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    evaluations: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Evaluation'
        }]
});
