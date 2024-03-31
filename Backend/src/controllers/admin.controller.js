import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Faq } from "../models/faq.model.js";
import { Student } from "../models/student.model.js";
import { Admin } from "../models/admin.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const registerStudent = asyncHandler( async (req, res) => {
    const {email,password} = req.body

    if ( [email,password].some( (field) => field?.trim() === "") ) {
        throw new ApiError(400, "Email is required")
    }

    const existedStudent = await Student.findOne({
        email
    })

    if (existedStudent) {
        throw new ApiError(409, "Student with entered email already exists")
    }

    const resumeLocalPath = req.files?.resume[0]?.path;
    
    if (!resumeLocalPath) {
        throw new ApiError(400, "Resume file is required")
    }

    const resume = await uploadOnCloudinary(resumeLocalPath)

    if (!resume) {
        throw new ApiError(400, "Resume file is required")
    }
   

    const student = await Student.create({
        email,
        resume: resume.url,
        password,
    })

    const createdStudent = await Student.findById(student._id).select(
        "-password -refreshTokens"
    )

    if (!createdStudent) {
        throw new ApiError(500, "Something went wrong while registering the student")
    }

    return res.status(201).json(
        new ApiResponse(200, createdStudent, "Student registered Successfully")
    )

} )




const createFAQ = asyncHandler(async (req,res) => {
        const {question,answer} = req.body;
        if([question,answer].some((field) => {field?.trim()  === ""})){
            throw new ApiError(400,"All fields are required")
        }
        const faq = await Faq.create({
            question,
            answer,
        })

        const createdFaq = await Faq.findById(faq._id)

        if(!createdFaq) {
            throw new ApiError(500,"Something went wrong while creating faq")
        }

        return res.status(201).json(
            new ApiResponse(201,"Faq entered successfully")
        )
});

export {
    createFAQ,
    registerStudent,
}