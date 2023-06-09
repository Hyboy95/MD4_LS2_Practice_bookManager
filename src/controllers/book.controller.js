const BookModel = require("../models/book.model");

class BookController {
    static getNewBookPage(req, res) {
        res.render('create');
    }

    static async addNewBook(req, res) {
        const {name, price, status, author} = req.body;
        await BookModel.addNewBook(name, +price, status, author).catch(err => console.log(err.message));
        res.redirect('/');
    }

    static async displayListBook(req, res) {
        let data = await BookModel.displayListBook();
        res.render("index", {books: data});
    }

    static async deleteBook(req, res) {
        let id = req.query.id;
        if (id) {
            await BookModel.deleteBookByID(+id).catch(err => console.log(err.message));
            res.redirect('/');
        }
    }

    static async getUpdatePage(req, res) {
        let id = req.query.id;
        if (id) {
            let bookDetail = await BookModel.getDetailBook(+id).catch(err => console.log(err.message));
            res.render('update', {book: bookDetail[0]});
        }
    }

    static async updateBook(req, res) {
        let id = req.query.id;
        if (id) {
            let {name, price, author, status} = req.body;
            await BookModel.updateProductByID(+id, name, +price, author, status).catch(err => console.log(err.message));
            res.redirect('/');
        }
    }
}

module.exports = BookController;