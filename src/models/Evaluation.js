"use strict";
exports.__esModule = true;
exports.EvaluationSchema = void 0;
var mongoose_1 = require("mongoose");
exports.EvaluationSchema = new mongoose_1.Schema({
    value: {
        type: Number,
        required: true,
        min: 0,
        max: 20
    },
    date: {
        type: Date,
        required: true
    }
});
