// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import * as userService from "./user.service.js";
import { Router } from "express";

const router = Router();

router.get("/users/:id", async (req, res) => {
  console.log("GET /users/:id");
  try {
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

router.post("/users", async (req, res) => {
  console.log("POST /users");
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log("error trying to POST user: ", error);
    res.status(500).json({ error: error.message });
  }
});

export { router };
