// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import * as reportService from "./report.service.js";
import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /report:
 *   get:
 *     summary: Get a monthly report of calorie entries
 *     tags: [Reports]
 *     parameters:
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *       - in: query
 *         name: year
 *         schema:
 *           type: number
 *         required: true
 *         description: The year of the entries
 *       - in: query
 *         name: month
 *         schema:
 *           type: number
 *         required: true
 *         description: The month of the entries
 *     responses:
 *       200:
 *         description: Monthly report fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 breakfast:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: number
 *                       description:
 *                         type: string
 *                       amount:
 *                         type: number
 *                 lunch:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: number
 *                       description:
 *                         type: string
 *                       amount:
 *                         type: number
 *                 dinner:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: number
 *                       description:
 *                         type: string
 *                       amount:
 *                         type: number
 *                 other:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: number
 *                       description:
 *                         type: string
 *                       amount:
 *                         type: number
 *       500:
 *         description: Internal server error
 */
router.get("/report", async (req, res) => {
  console.log("\n Report Controller Loaded \n");
  try {
    const { user_id, year, month } = req.query;
    const report = await reportService.getMonthlyReport(user_id, parseInt(year), parseInt(month));
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router };
