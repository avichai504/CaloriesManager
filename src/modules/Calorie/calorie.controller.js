// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import * as calorieService from "./calorie.service.js";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.post("/addcalories", async (req, res) => {
  try {
    req.body.id = uuidv4();
    const calorie = await calorieService.createCalorie(req.body);
    res.status(201).json(calorie);
  } catch (error) {
    console.log(`Error POSTING /addcalories: ${error}`);
    res.status(500).json({ error: error.message });
  }
});

export { router };
