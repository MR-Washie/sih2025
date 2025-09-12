import express, { Router } from "express";
import { facultyLogin, studentLogin } from "../controllers/auth.controller.js";

const router = express.Router();

export const studentL = router.post("/studentLogin", studentLogin);

export const facultyL = router.post("/facultyLogin", facultyLogin);




export default router;