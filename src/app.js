import express from "express"
import morgan from "morgan"

import bookRoutes from "./routes/index.routes"

const app = express();

/* Setting the port to 4000 */
app.set("port",4000);

/* Middleware */
app.use(morgan("dev"));
app.use(express.json());


app.use("/api-restful/books",bookRoutes);

export default app;