const getTheTitles = function(books) {
    let book_titles = [];
    books.forEach(book => {
        book_titles.push(book.title)
    });
    return book_titles;
};

// Do not edit below this line
module.exports = getTheTitles;
