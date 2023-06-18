import mongoose from "mongoose";
import { ClientModel } from "./client-model";

// 1. Interface
export interface ITaskModel extends mongoose.Document {
    description: string;
    date:string;
    clientId:mongoose.Schema.Types.ObjectId;
    status:boolean;
}

// 2. Schema
export const TaskSchema = new mongoose.Schema<ITaskModel>({
    description: {
        type: String,
        required: [true, "Missing description"],
        minlength: [2, "Description must be minimum 2 chars"],
        maxlength: [100, "Description can't exceed 100 chars"],
        trim: true,
    },
    date: {
        type: String,
        required: [true, "Missing date"],
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId     
    },
    status: {
        type: Boolean,
        required: [true, " Missing status"],
    }
},{
        versionKey: false,
        toJSON: { virtuals: true},
        id: false
});

TaskSchema.virtual("client", {
    ref: ClientModel,
    localField: "clientId",
    foreignField: "_id",
    justOne: true
});

// 3. Model
export const TaskModel = mongoose.model<ITaskModel>("TaskModel", TaskSchema, "tasks");