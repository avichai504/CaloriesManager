// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /about:
 *   get:
 *     summary: Get information about the developers
 *     tags: [About]
 *     responses:
 *       200:
 *         description: Developer information fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   firstname:
 *                     type: string
 *                   lastname:
 *                     type: string
 *                   id:
 *                     type: number
 *                   email:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
router.get("/about", async (req, res) => {
  console.log("GET /about");
  try {
    const developers = [
      { firstname: "Avichai", lastname: "Gal-Or", id: 207051848, email: "avichai504@gmail.com" },
      { firstname: "Nitzan", lastname: "Azbel", id: 311489470, email: "167nitzan@gmail.com" }
    ];
    res.status(200).json(developers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router };
