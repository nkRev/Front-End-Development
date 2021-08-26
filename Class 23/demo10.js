var Book = /** @class */ (function () {
    function Book() {
    }
    //console logging within the class lets us not repeat ourselves for each obj
    Book.prototype.getBookInfo = function () {
        console.log("Book: Title = " + this.title + ", Author = " + this.author + ", Price = " + this.price);
    };
    return Book;
}());
var book1 = new Book();
book1.title = 'Title 1';
book1.author = 'Author 1';
book1.price = 100;
var book2 = new Book();
book2.title = 'Big Java Late Objects';
book2.author = 'Author Name Here';
book2.price = 200;
book1.getBookInfo();
book2.getBookInfo();
