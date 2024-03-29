import mongoose, {Schema} from "mongoose";

const studentSchema = new Schema({
    email: { 
        type: String, 
        required: [true, "College Email is required"] ,
        unique: [true, "College Email already exists"],
        lowercase : true,
        trim : true,
        index : true,
    },
    password: {
        type: String, 
        required: [true, "Password is required"] ,
        trim : true,
    },
    resume: { // resume url cloudinary
        type: Schema.Types.ObjectId,
        ref : "Student",
    },
    refreshTokens: { 
        type: String,
    },
  },{ timestamps : true });
  

export const Student = mongoose.model("Student",studentSchema);