import {Router} from "express";
import {getAllFAQs} from "../controllers/student.controller.js"

const router = Router()

router.route("/getFaqs").get(getAllFAQs)

export default router