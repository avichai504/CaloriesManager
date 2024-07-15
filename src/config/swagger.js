// Avichai Gal Or 207051848
// Nitzan Azbel 311489470

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export const setupSwagger = (app) => {
  const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Express API",
        description: "Express API Information",
        contact: { name: "Developer" },
        servers: ["http://localhost:3000"],
      },
    },
    apis: ["./src/modules/**/*.js"],
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
