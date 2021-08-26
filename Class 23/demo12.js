var Book = /** @class */ (function () {
    function Book(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    Book.prototype.getBookInfo = function () {
        console.log("Book: Title = " + this.title + ", Author = " + this.author + ", Price = " + this.price);
    };
    return Book;
}());
var book1 = new Book("Eloquent Javascript", "Author1", 100);
var book2 = new Book("Angular for dummies", "author 2", 1000);
book1.getBookInfo();
book2.getBookInfo();
