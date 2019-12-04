let data;
let output;
function preload() {
    data = loadJSON("/show");
}

function setup() {
    let addButton = select("#add");
    let searchButton = select("#search"); 
    addButton.mousePressed(addData);
    searchButton.mousePressed(searchData);
    output = createDiv('');
}

function addData() {
    let author = select("#author").value();
    let book = select("#book").value(); 
    if (author === undefined || book === undefined || author === '' || book === '') {
        return;
    }
    createP("Data was added!!");
    loadJSON('/add/'+author+'/'+book, dataAdded);
    function dataAdded(err, dt) {
        console.log(dt); 
        console.log(err);
    }
}

function searchData() {

    output.html("123123");
    output.html('asdasd');
    // let author = select("#author").value();
    // console.log(author);
    // if (author === undefined || author === '' || author === 'all') {
    //     let keys = Object.keys(data);
    //     for (let k of keys) {
    //         createP(k+" : ");
    //         let books = data[k];
    //         for (let book of books) {
    //             createP(book);
    //         }        
            
    //     }
    // } else {
    //     let books = data[author.toLowerCase()];
    //     if (books === undefined) {
    //         createP(author.toLowerCase()+" not found in the data.")
    //     } else {
    //         for (let book of books) {
    //             createP(book);
    //         }
    //     }
    // }
}
