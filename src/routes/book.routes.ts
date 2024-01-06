import { Router } from "express";
import { BookControllers } from "../controllers/book.controllers";
import { BookMiddlewares } from "../middlewares/book.middlewares";

export const bookRouter = Router();
const bookControllers = new BookControllers();
const bookMiddlewares = new BookMiddlewares();

bookRouter.post("/", bookMiddlewares.verifyBookRegister, bookControllers.createBook);
bookRouter.get("/", bookControllers.getBook);

bookRouter.use("/:id", bookMiddlewares.verifyBookId);

bookRouter.get("/:id", bookControllers.retrieveBook);
bookRouter.patch("/:id", bookMiddlewares.verifyBookRegister, bookControllers.updateBook);
bookRouter.delete("/:id", bookControllers.deleteBook);