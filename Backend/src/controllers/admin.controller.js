import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Faq } from "../models/faq.model.js";
import {ApiResponse} from "../utils/ApiResponse.js";


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

export {createFAQ}