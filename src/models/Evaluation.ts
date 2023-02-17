import { Schema } from 'mongoose';

export interface Evaluation {
    value: number;
}

export const EvaluationSchema = new Schema<Evaluation>({
    value: {
        type: Number,
        required: true,
        min: 0,
        max: 20
    }
});