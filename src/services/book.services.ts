import { booksDatabase } from "../database/database";
import { CreateBook, Book, UpdateBook, BookArray } from "../interfaces/book.interfaces";
import { idGenerate } from "../utils";

export class BookServices {
    createBook = (data: CreateBook): Book => {
        const newBook: Book = {
            id: idGenerate(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        booksDatabase.push(newBook);

        return newBook;
    };

    getBook = (query: string): BookArray =>  {
        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            const bookFilter = booksDatabase.find((data) => data.name.toLowerCase().includes(lowerCaseQuery));
            
            return bookFilter ? [bookFilter] : [];
        }

        return booksDatabase;
    };

    retrieveBook = (index: number): Book => {
        return booksDatabase[index];
    };

    updateBook = (index: number, data: UpdateBook): Book => {
        booksDatabase[index] = {
            ...booksDatabase[index],
            ...data,
            updatedAt: new Date(),
        };

        return booksDatabase[index];
    };

    deleteBook = (index: number): void => {
        booksDatabase.splice(index, 1);
    };
}