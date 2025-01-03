import express from "express";
import errorMiddleware from "./middlewares/error.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

import UserRoutes from "./routes/user.route.js";

app.use("/api/v1", UserRoutes);

app.use(errorMiddleware);

export default app;
