// Interfaces 1

/**
 * a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:
 * title, author:  all strings
 * published: Date
 * pages: number
 */
interface IBook {
  title: string;
  readonly author: string;
  published?: Date;
  pages?: number;
}

/**
 * b) Create a function that takes an IBook instance and test it with an object instance.
 */
function Testing<IBook>(book: IBook) {
  console.log(`Book: ${JSON.stringify(book)}`);
}
const book: IBook = {
  title: "TestBook",
  author: "Test Author",
  published: new Date(),
  pages: 10
};
Testing(book);

/**
 * c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
 */

/* Duck Typing means, if it talks like a duck, walks like a duck, its a duck.
 * So it means that when you make an interface and use the fields of it you dont need to declare its types
 */

class Book implements IBook {
  constructor(
    private _title: string,
    private _author: string,
    private _published: Date,
    private _pages: number
  ) {}

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    this._author = value;
  }

  get published() {
    return this._published;
  }
  set published(value) {
    this._published = value;
  }

  get pages() {
    return this._pages;
  }
  set pages(value) {
    this._pages = value;
  }
}
