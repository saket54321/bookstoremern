import express from "express";
import bookcontroller from "./book.controller.js";
const router=express.Router();
router.post('/',bookcontroller.addbook);
router.get('/',bookcontroller.getbook);
router.put('/:id',bookcontroller.updatebook);
router.delete('/:id',bookcontroller.deletebook);


export default router;