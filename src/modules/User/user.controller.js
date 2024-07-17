// Avichai Gal Or 207051848
// Nitzan Azbel 311489470
// src/modules/User/user.controller.js

import * as userService from "./user.service.js";
import { Router } from "express";

const router = Router();

/**
 * GET endpoint for fetching a user by their ID.
 * The user ID is extracted from the URL parameter.
 */
router.get("/users/:id", async (req, res) => {
  console.log("GET /users/:id");
  try {
    // Retrieve the user by ID using the userService
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.log("error trying to GET user: ", error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST endpoint to create a new user.
 * User data is taken from the request body.
 */
router.post("/users", async (req, res) => {
  console.log("POST /users");
  try {
    // Create a new user using the userService
    const user = await userService.createUser(req.body);

    // Return the newly created user data with a 201 status code
    res.status(201).json(user);
  } catch (error) {
    console.log("error trying to POST user: ", error);
    res.status(500).json({ error: error.message });
  }
});

export { router };
