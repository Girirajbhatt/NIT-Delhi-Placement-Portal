import mongoose, {Schema} from "mongoose";

const resumeSchema = new Schema({
    studentId: { // Roll number
        type: Schema.Types.ObjectId,
        ref : "Student",
    },
    fistName: { 
        type: String, 
        required: [true, "first name is required"],
        lowercase : true,
        trim : true,
    },
    lastName: { 
        type: String, 
        required: [true, "last name is required"],
        lowercase : true,
        trim : true,
    },
    passOut : {
        type: Number, 
        required: [true, "Pass-out batch should not be empty"] ,
        trim : true,
        index : true,
        min : [2022, "Pass-out batch should be greater than 1990"],
        max : [2026,"Pass-out batch should be less than 2100"],
    },
    branch : {
        type : String,
        enum : ["CSE","ECE","ME","CE","EE"],
        required : [true, "Branch field should not be empty"],
    },
    degree : {
        type : String,
        enum : ["B.Tech","M.Tech","Phd"],
        required : [true, "Degree field should not be empty"],
    },
    gender : {
        type : String,
        enum : ["Male","Female","Others"],
        required : [true, "Gender field should not be empty"],
    },
    contactNo : {
        type: Number, 
        required: [true, "Contact Number field should not be empty"] ,
        unique: [true, "Contact Number already exists"],
    },
    collegeEmail : {
        type : Schema.Types.ObjectId,
        ref : "Student"
    },
    cgpa : {
        type: Number, 
        required: [true, "CGPA field should not be empty"] ,
        index : true,
    },
    educationDetails : {

    },
    experienceDetails : {

    },
    residentialAddress : {
        type: String, 
        required: [true, "Address field should not be empty"] ,
        lowercase : true,
        trim : true,
    },
    postCode : {
        type: Number, 
        required: [true, "Postal Code field should not be empty"] ,
        unique: [true, "College Email already exists"],
    },
    state : {
        type: String, 
        required: [true, "State field should not be empty"] ,
        lowercase : true,
        trim : true,
    },
    fromCountry : {
        type: String, 
        required: [true, "Country field should not be empty"] ,
        lowercase : true,
        trim : true,
    },
    linkedinLink : {
        type: String, 
        unique: [true, "Linkedin Link already exists"],
        trim : true,
    },
    skills : {
        type: String, 
        required: [true, "Skills field should not be empty"] ,
        lowercase : true,
        trim : true,
    },
    resume: { // resume url cloudinary
        type: String, 
        required: [true, "Resume is required"] ,
    },
  });
  

export const Resume = mongoose.model("Student",resumeSchema);