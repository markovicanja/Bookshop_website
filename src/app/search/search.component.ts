import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  title: string;
  author: string;
  books: Book[];

  ngOnInit(): void {
    let user: User = JSON.parse(localStorage.getItem("user"));
    if (user == null) this.router.navigate(["login"]);
    this.title = "";
    this.author = "";
    this.books = [];
  }

  search() {
    this.books = [];

    let allBooks: Book[] = JSON.parse(localStorage.getItem("allBooks"));
    allBooks.forEach(book => {
      if (this.title != "" && this.author == "") {
        if (book.title.toLowerCase().includes(this.title.toLowerCase())) this.books.push(book);
      }
      else if (this.title == "" && this.author != "") {
        if (book.author.toLowerCase().includes(this.author.toLowerCase())) this.books.push(book);
      }
      else if (this.title != "" && this.author != "") {
        if (book.author.toLowerCase().includes(this.author.toLowerCase()) && book.title.toLowerCase().includes(this.title.toLowerCase())) this.books.push(book);
      }
    });
  }  

  bookDetails(book: Book) {
    localStorage.setItem("book", JSON.stringify(book));
    this.router.navigate(["bookDetails"]);
  }

}
