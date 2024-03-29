import { asyncHandler } from "../utils/asyncHandler.js";
import { Faq } from "../models/faq.model.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const getAllFAQs = asyncHandler(async (req, res) => {
    try {
        const faqs = await Faq.find();
        return res.status(200).json(new ApiResponse(200, "Fetched all FAQs successfully", { faqs }));
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

export { getAllFAQs };
