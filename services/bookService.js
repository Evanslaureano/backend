import * as bookModdel from '../models/bookModel.js';

export const fetcAllBooks = async() =>{
    const books = await bookModdel.fetch();
    return books;
}