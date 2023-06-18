import mongoose from "mongoose";

// 1. Interface
export interface IClientModel extends mongoose.Document {
    name: string;
    lineOfBusiness:string;
    phone:string;
    email:string;
}

// 2. Schema
export const ClientSchema = new mongoose.Schema<IClientModel>({
    name: {
        type: String,
        required: [true, "Missing name"],
        minlength: [2, "Name must be minimum 2 chars"],
        maxlength: [100, "Name can't exceed 100 chars"],
        trim: true,
        unique: true
    },
    lineOfBusiness: {
        type: String,
        required: [true, "Missing line Of Business"],
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: [true, " Missing phone"],
        maxlength: [10, "Phone must be 10 chars"],
        trim: true,
        
    },
    email: {
        type: String,
        required: [true, " Missing email"],
        trim: true,
        unique: true
    },

});

// 3. Model
export const ClientModel = mongoose.model<IClientModel>("ClientModel", ClientSchema, "clients");