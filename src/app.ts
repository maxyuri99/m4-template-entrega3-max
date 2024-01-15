import "express-async-errors";
import express, { json } from "express";
import { bookRouter } from "./routes/book.routes";
import { GlobalErrors } from "./errors/errors.middleware";
import helmet from "helmet";

export const app = express();

app.use(helmet());
app.use(json());

const globalErrors = new GlobalErrors(); 

app.use("/books", bookRouter);

app.use(globalErrors.handleErrors);