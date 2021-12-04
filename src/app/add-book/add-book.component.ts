import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private router: Router) { }

  author: string;
  title: string;
  year: number;
  pages: number;
  image: string;
  description: string;
  msg: string;
  successMsg: string;

  ngOnInit(): void {
    let user: User = JSON.parse(localStorage.getItem("user"));
    if (user == null) this.router.navigate(["login"]);
    this.title = "";
    this.author = "";
    this.image = "";
    this.description = "";
  }

  add() {
    this.msg = "";
    this.successMsg = "";
    if (this.author == "" || this.title == "" || this.image == "" || this.description == "" || this.year === undefined || this.pages === undefined) {
      this.msg = "Morate popuniti sva polja.";
      return;
    }
    let book: Book = new Book();
    book.author = this.author;
    book.title = this.title;
    book.year = this.year;
    book.pages = this.pages;
    book.image = this.image;
    book.description = this.description;
    book.promotion = false;
    book.rating = 0;
    book.comments = null;
    let allBooks: Book[] = JSON.parse(localStorage.getItem("allBooks"));
    allBooks.push(book);
    localStorage.setItem("allBooks", JSON.stringify(allBooks));
    this.successMsg = "Uspešno ste dodali knjigu";
  }

}
