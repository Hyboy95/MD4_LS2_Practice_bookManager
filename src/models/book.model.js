const baseModel = require("./base.model");

class BookModel {
    static async getDetailBook(id) {
        let sql = `SELECT * FROM books WHERE id = ${id}`;
        return await baseModel.querySql(sql);
    }

    static async addNewBook(name, price, status, author) {
        let sql = `INSERT INTO books (name, price, status, author)
        values ('${name}', ${price}, '${status}', '${author}')`;
        await baseModel.querySql(sql);
    }

    static async displayListBook() {
        let sql = `SELECT * FROM books`;
        return await baseModel.querySql(sql);
    }

    static async deleteBookByID(id) {
        let sql = `DELETE FROM books WHERE id = ${id}`;
        await baseModel.querySql(sql);
    }

    static async updateProductByID(id, name, price, author, status) {
        let sql = `UPDATE books 
        SET name = '${name}', price = ${price}, author = '${author}', status = '${status}'
        WHERE id = ${id}`;
        await baseModel.querySql(sql);
    }
}

module.exports = BookModel;