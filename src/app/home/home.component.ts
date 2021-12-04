import { Component, OnInit } from '@angular/core';
import { allBooks } from '../data/books';
import { Book } from '../model/book.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  user: User;
  allBooks: Book[];
  promotionBooks: Book[];

  ngOnInit(): void {
    this.allBooks = allBooks;
    this.promotionBooks = [];
    this.allBooks.forEach(book => {
      if (book.promotion) this.promotionBooks.push(book);
    });
    this.user = JSON.parse(localStorage.getItem("user"));
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

}
