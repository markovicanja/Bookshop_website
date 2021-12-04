import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allBooks } from '../data/books';
import { Book } from '../model/book.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;
  allBooks: Book[];
  promotionBooks: Book[];

  ngOnInit(): void {
    if (localStorage.getItem("allBooks") == null) {
      this.allBooks = allBooks;
      localStorage.setItem("allBooks", JSON.stringify(this.allBooks));
    }
    else {
      this.allBooks = JSON.parse(localStorage.getItem("allBooks"));
    }    
    this.promotionBooks = [];
    this.allBooks.forEach(book => {
      if (book.promotion) this.promotionBooks.push(book);
    });
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) this.router.navigate(["login"]);
  }

  prev() {
    document.getElementById('slider-container').scrollLeft -= 270;
  }

  prevPromotion() {
    document.getElementById('promotion-slider-container').scrollLeft -= 270;
  }

  next() {
    document.getElementById('slider-container').scrollLeft += 270;
  }

  nextPromotion() {
    document.getElementById('promotion-slider-container').scrollLeft += 270;
  }

  bookDetails(book: Book) {
    localStorage.setItem("book", JSON.stringify(book));
    this.router.navigate(["bookDetails"]);
  }

}
