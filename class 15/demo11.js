class Book {
 
    /**
     * parameterized constructor in js
     * allows the creation of book objects
     * @param {*} title 
     * @param {*} author 
     * @param {*} price 
     */
      constructor(title, author, price){
        this.title = title;
        this.author = author;
        this.price = price;
      }
    
        /**
         * console.loging book objs
         */
        getBookInfo(){
            console.log('Book: Title= '+ this.title+', Author= '+this.author+', Price= $'+ this.price);
        }
    
    }
    /**
     * creating book objs
     */
    const book1 = new Book('Title 101', 'Author 101', 1000);
    const book2  = new Book('js', 'some author', 1000000)
    
    /**
     * book objs are accessing book classes getBookInfo methods
     */
    book1.getBookInfo();
    book2.getBookInfo();