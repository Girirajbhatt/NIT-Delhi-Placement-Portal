import {Router} from "express";
import {createFAQ} from "../controllers/admin.controller.js"

const router = Router()

router.route("/createFaq").put(createFAQ);

export default router