class Book {
  constructor(
    private title: string,
    private author: string,
    private price: number
  ) {}

  public getBookInfo() {
    console.log(
      `Book: Title = ${this.title}, Author = ${this.author}, Price = ${this.price}`
    );
  }
}

let book1 = new Book("Eloquent Javascript", "Author1", 100);
let book2 = new Book("Angular for dummies", "author 2", 1000);
book1.getBookInfo();
book2.getBookInfo();
