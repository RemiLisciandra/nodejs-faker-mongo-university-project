import { Document, Schema, model } from 'mongoose';
import { Student } from './Student';

interface Address {
    street: string;
    city: string;
    zip: string;
    country: string;
}

interface School {
    name: string;
    private: boolean;
    address: Address;
    students: Array<Student>;
}

interface SchoolModel extends School, Document {}

const schoolSchema = new Schema<SchoolModel>({
    name: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

const School = model<SchoolModel>('School', schoolSchema);

export { School, SchoolModel, Address };