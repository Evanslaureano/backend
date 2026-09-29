import * as bookService from '../services/bookServices.js';

export const fetchAllBooks = async (req, res) =>{
    const books = await bookServices.fetchAllBook();
    res.status(200).json(books);
}