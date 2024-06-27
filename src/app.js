import express from "express";
import dotenv from "dotenv";
import { userModule } from "./modules/User/user.module.js";
import db from './config/db.js';
import "reflect-metadata"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Initialize modules
userModule(app);

// // Connect to MongoDB and start server
// db.connect()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Database connection failed:", error);
//   });
// Connect to MongoDB and start server
db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
