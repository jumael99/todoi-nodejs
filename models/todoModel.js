import mongoose from 'mongoose';

const taskSchema = {
    taskHeading: {
        type: String,
        required: true
    },
    completedNote: {
        type: String,
        default: ''
    }
};

export const TodayTask = mongoose.model('TodayTask', new mongoose.Schema(taskSchema));
export const CompletedTask = mongoose.model('CompletedTask', new mongoose.Schema(taskSchema));
export const IncompletedTask = mongoose.model('IncompletedTask', new mongoose.Schema(taskSchema));