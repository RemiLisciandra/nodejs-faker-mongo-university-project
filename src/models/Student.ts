import { Schema } from 'mongoose';
import { Evaluation } from './Evaluation';

export interface Student {
    firstname: string;
    lastname: string;
    gender: string;
    country: string;
    birthdate: Date;
    evaluations: Array<Evaluation>;
}

export const StudentSchema = new Schema<Student>({
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
        type: Schema.Types.ObjectId,
        ref: 'Evaluation'
    }]
});