import mongoose, {Schema} from "mongoose";

const adminSchema = new Schema({
    adminName: { 
        type: String, 
        required: [true, "Coordinator name is required"] ,
        lowercase : true,
        trim : true,
    },
    email: { 
        type: String, 
        required: [true, "Coordinator email is required"] ,
        unique: [true, "Coordinator already exists"],
        lowercase : true,
        trim : true,
        index : true,
    },
    password: { 
        type: String, 
        required: [true, "Password field should not be empty"] ,
        trim : true,
    },
    contactNo: { 
        type: Number, 
        required: [true, "Contact Number field should not be empty"] ,
        unique: [true, "Contact Number already exists"],
    },
    designation : { 
        type: String,
        required: [true, "Designation field should not be empty"] ,
    },
    image: {// coludinary url
        type: String,
    },
    refreshTokens: {
        type: String,
    },
},{timestamps : true});

export const Admin = mongoose.model("Admin",adminSchema);