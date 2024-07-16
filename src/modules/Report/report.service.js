// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { Calorie } from "../Calorie/calorie.model.js";

/**
 * Retrieves a formatted monthly report of calorie intake for a specific user.
 * This function uses MongoDB aggregation to compile and group calorie data by category
 * for a given year and month.
 */
export const getMonthlyReport = async (user_id, year, month) => {
  console.log(`user_id: ${user_id}, year: ${year}, month: ${month}`);

  // Perform aggregation to group and format the calorie data
  const report = await Calorie.aggregate([
    {
      $match: {
        user_id: user_id,
        year: year,
        month: month,
      },
    },
    {
      $group: {
        _id: "$category", // Group results by category
        entries: {
          $push: {
            day: "$day",
            description: "$description",
            amount: "$amount",
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        category: "$_id",
        entries: 1,
      },
    },
  ]);

  // Initialize an object to hold the formatted report by categories
  const formattedReport = {
    breakfast: [],
    lunch: [],
    dinner: [],
    other: [],
  };

  // Populate the formatted report with the aggregated data
  report.forEach((item) => {
    formattedReport[item.category] = item.entries;
  });

  return formattedReport;
};
