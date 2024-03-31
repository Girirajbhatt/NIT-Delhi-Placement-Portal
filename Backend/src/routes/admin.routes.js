import {Router} from "express";
import {createFAQ, registerStudent} from "../controllers/admin.controller.js"
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/createFaq").post(createFAQ);
router.route("/registerStudent").post(upload.fields([
    {
        name : "resume",//name should be same as frontend
        maxCount : 1,
    }
]),registerStudent);

export default router