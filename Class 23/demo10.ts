class Book {
  public title: string;
  public author: string;
  public price: number;

  //console logging within the class lets us not repeat ourselves for each obj
  //the use of back tics and template lierals allows you to create a cleaner syntax
  //with it being cleaner it is easier to read and doesn't call for multiple concat operator
  //along with quotes
  public getBookInfo() {
    console.log(
      `Book: Title = ${this.title}, Author = ${this.author}, Price = ${this.price}`
    );
  }
}

let book1 = new Book();
book1.title = "Title 1";
book1.author = "Author 1";
book1.price = 100;

let book2 = new Book();
book2.title = "Big Java Late Objects";
book2.author = "Author Name Here";
book2.price = 200;

book1.getBookInfo();
book2.getBookInfo();
