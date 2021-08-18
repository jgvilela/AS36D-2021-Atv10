const axios = require('axios').default;

async function postBook(object) {
    try {
        let res = await axios.post('http://localhost:3000/books', object);
        console.log(res.data);
    } catch (error) {
        console.log(error.response.data);
    }
}

async function getAllBooks() {
    const dados = await axios.get('http://localhost:3000/books');
    console.log(dados.data);
} 


let object1 = {ID: 3, name: 'My Boook', author: 'Me and only me'};
postBook(object1);

let object2 = {ID: 4, name: 'The Lord of the Rings: The Fellowship of the Ring', author: 'J. R. R. Tolkien'};
postBook(object2);

let object3 = {ID: 3, name: 'The Lord of the Rings: The Two Towers', author: 'J. R. R. Tolkien'};
postBook(object3);

getAllBooks();