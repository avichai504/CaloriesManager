// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import * as calorieService from "./calorie.service.js";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid"; // Generates unique identifiers

const router = Router();

/**
 * Define a POST route to add calorie data.
 * This route generates a unique ID for each new calorie entry and saves it to the database.
 */
router.post("/addcalories", async (req, res) => {
  try {
    // Assign a unique ID to the request body
    req.body.id = uuidv4();

    // Create a new calorie entry using the calorie service
    const calorie = await calorieService.createCalorie(req.body);
    res.status(201).json(calorie);
  } catch (error) {
    console.log(`Error POSTING /addcalories: ${error}`);
    res.status(500).json({ error: error.message });
  }
});

export { router };
