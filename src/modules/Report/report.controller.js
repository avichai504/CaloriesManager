// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import * as reportService from "./report.service.js";
import { Router } from "express";

const router = Router();

/**
 * Define a GET route for fetching monthly reports.
 * This route extracts user ID, year, and month from the query parameters and retrieves
 * the corresponding monthly report from the report service.
 */
router.get("/report", async (req, res) => {
  console.log("\n Report Controller Loaded \n");
  try {
    const { user_id, year, month } = req.query;

    // Parse year and month to integers and fetch the monthly report
    const report = await reportService.getMonthlyReport(
      user_id,
      parseInt(year),
      parseInt(month)
    );
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router };
