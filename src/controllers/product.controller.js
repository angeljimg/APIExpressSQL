import {methods as bookServices} from "../services/product.service";

const getBooks = async(req, res) =>{
    try{
        const query = await bookServices.readBooks(res);
        return query
    }catch(error){
        res.status(400);
        res.send(error.message)
    }
};

const getBook = async(req, res) =>{
    try {
        const query = await bookServices.readBook(req.params, res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message)
    }
};

const createBook = async(req, res) =>{
    try {
        const { id, title, total_pages, author, nationality, language, cover_url, editorial } = req.body;
        const query = await bookServices.createBook(id, title, total_pages, author, nationality, language, cover_url, editorial, res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message)
    }
};

const updateBook = async(req, res) =>{
    try {
        const {title, total_pages, author, nationality, language, cover_url, editorial } = req.body;
        const query = await bookServices.updateBook(req.params, title, total_pages, author, nationality, language, cover_url, editorial, res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message)
    }
};

const deleteBook = async(req, res) =>{
    try {
        const query = await bookServices.deleteBook(req.params, res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message)
    }
};

export const methods ={
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}