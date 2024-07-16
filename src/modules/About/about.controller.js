// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import { Router } from "express";

//Create a new router object to handle routes.
const router = Router();

/**
 * Define a GET route for the /about endpoint.
 * This route retrieves information about developers.
 */
router.get("/about", async (req, res) => {
  console.log("GET /about");
  try {
    // Array of developer objects with their details
    const developers = [
      {
        firstname: "Avichai", lastname: "Gal-Or", id: 207051848, email: "avichai504@gmail.com",
      },
      {
        firstname: "Nitzan", lastname: "Azbel", id: 311489470, email: "167nitzan@gmail.com",
      },
    ];
    res.status(200).json(developers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router };
