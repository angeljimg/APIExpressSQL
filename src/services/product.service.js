import {getConnection} from "./../common/connection"

async function readBooks(response){
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM books");
    return response.json(result)
}

async function readBook(body, response){
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM books WHERE id = ?", body.id);
    if(result.length === 0){
        const message = {message: "El libro con el id "+ body.id +" no existe"};
        return response.json(message);
    }else{
        return response.json(result)
    }
}

async function createBook(id, title, total_pages, author, nationality, language, cover_url, editorial, response){
    if(id === undefined || title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language === undefined || cover_url === undefined || editorial === undefined){
        return response.status(400).json({message: "Bad request. Please fill all field, was not created"});
    }
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO `books` (`id`,`title`,`total_pages`,`author`,`nationality`,`language`,`cover_url`,`editorial`) VALUES (?,?,?,?,?,?,?,?)", [id,title,total_pages,author,nationality,language,cover_url,editorial]);
    return response.json({message: "Was added correctly"});    
}

async function updateBook(body, title, total_pages, author, nationality, language, cover_url, editorial, response){
    if(title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language === undefined || cover_url === undefined || editorial === undefined){
        return response.status(400).json({message: "Bad request. Was not updated"});
    }
    const connection = await getConnection();
    const result = await connection.query("UPDATE `books` SET `title`=?,`total_pages`=?,`author`=?,`nationality`=?,`language`=?,`cover_url`=?,`editorial`=? WHERE id=?", [title,total_pages,author,nationality,language,cover_url,editorial,body.id]);
    return response.json({message: "Was updated correctly"});    
}

async function deleteBook(body, response){
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM books WHERE id = ?", body.id);
    if(result.length === 0){
        const message = {message: "El libro con el id "+ body.id +" no existe"};
        return response.json(message);
    }else{
        return response.json({message: "El libro fue eliminado"})
    }
}

export const methods = {
    readBooks,
    readBook,
    createBook,
    updateBook,
    deleteBook
}