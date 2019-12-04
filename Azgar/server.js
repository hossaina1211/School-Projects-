let express = require("express");
let fs = require('fs');
let data = JSON.parse(fs.readFileSync("data.json"));
let web = express();

let server = web.listen(8050, listening);

function listening() {
    console.log("server is listening....");
    
}

web.get("/show", showData);
web.get("/search/:author", getBooks); 
web.get("/add/:author/:book", addData);

function showData(request, response) {
    response.send(data); 
}

function getBooks(request, response) {
    let author = request.params['author'];
    response.send(data[author.toLowerCase()]);
}

function addData(request, response) {
    let par = request.params;
    let author = par.author;
    let book = par.book; 
    console.log(author);
    console.log(book);
    
    //response.send("Author:" + author+"  Book Name:"+book);
    if (data[author.toLowerCase()] === undefined) {
        data[author.toLowerCase()] = [book];
    } else {
        data[author.toLowerCase()].push(book);
    }
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
}

web.use(express.static("files")) 