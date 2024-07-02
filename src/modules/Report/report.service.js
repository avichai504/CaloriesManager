//Avichai Gal Or 207051848
//Nitzan Azbel 311489470

import { Calorie } from "../Calorie/calorie.model.js";

export const getMonthlyReport = async (user_id, year, month) => {
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
        _id: "$category",
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

  const formattedReport = {
    breakfast: [],
    lunch: [],
    dinner: [],
    other: [],
  };

  report.forEach((item) => {
    formattedReport[item.category] = item.entries;
  });

  return formattedReport;
};

