//Avichai Gal Or 207051848
//Nitzan Azbel 311489470

import * as calorieService from "./calorie.service.js";
import { Router } from "express";

const router = Router();


/**
 * @swagger
 * /addcalories:
 *   post:
 *     summary: Add a new calorie entry
 *     tags: [Calories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *                 description: The ID of the user
 *                 example: "user123"
 *               year:
 *                 type: number
 *                 description: The year of the entry
 *                 example: 2024
 *               month:
 *                 type: number
 *                 description: The month of the entry
 *                 example: 6
 *               day:
 *                 type: number
 *                 description: The day of the entry
 *                 example: 27
 *               id:
 *                 type: string
 *                 description: Unique identifier for the calorie entry
 *                 example: "entry456"
 *               description:
 *                 type: string
 *                 description: Description of the calorie entry
 *                 example: "Lunch at restaurant"
 *               category:
 *                 type: string
 *                 description: Category of the meal
 *                 enum: ["breakfast", "lunch", "dinner", "other"]
 *                 example: "lunch"
 *               amount:
 *                 type: number
 *                 description: Amount of calories
 *                 example: 500
 *     responses:
 *       201:
 *         description: Calorie entry created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calorie'
 *       500:
 *         description: Internal server error
 */
router.post("/addcalories", async (req, res) => {
  try {
    debugger;
    const calorie = await calorieService.createCalorie(req.body);
    res.status(201).json(calorie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router };
