import express from "express";
import cors from "cors";
import orderRoutes from "./routes/order.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", orderRoutes);

const PORT = 4002;
app.listen(PORT, () => console.log(`Order Service running on ${PORT}`));
