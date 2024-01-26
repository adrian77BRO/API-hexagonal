import express from "express";
import indexRouter from "./src/shared/infrastructure/index.router";
import { db } from "./src/shared/application/mysqlConnection";

const app = express();
const PORT = "3000";

app.use(express.json());

app.use("/", indexRouter);

db.connect()
    .then(() => console.log("Database connected"))
    .catch((err: any) => console.error("Error connecting to database: " + err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});