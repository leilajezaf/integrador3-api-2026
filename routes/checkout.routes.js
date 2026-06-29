import express from "express";
import { createpreferenceMP } from "../controllers/checkout.controllers.js";

const router = express.Router()

router.post("/", createpreferenceMP)

// Las páginas de éxito y cancelación 
router.get("/success", (req, res) => {
    res.send("<h1>¡Pago realizado con éxito! Gracias por tu compra.</h1>");
});

router.get("/failure", (req, res) => {
    res.send("<h1>El pago fue rechazado o cancelado. Inténtalo de nuevo.</h1>");
});

export default router