import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Book } from '../model/book.model';
import { Comment } from '../model/comment.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;
  comment: string;
  book: Book;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) this.router.navigate(["login"]);
    this.book = JSON.parse(localStorage.getItem("book"));
    if (this.book == null) this.router.navigate(["login"]);
  }

  recommend() {
    this.router.navigate(["recommendations"]);
  }

  setPromotion(promote) {
    this.book.promotion = promote;
    this.saveState();
  }

  setRating(rating) {
    let rated = false;
    let ratings = JSON.parse(localStorage.getItem("rated"));
    if (ratings != null) {
      ratings.forEach(rating => {
        if (rating.username == this.user.username && rating.book == this.book.title) {
          rated = true;
          return;
        }
      })
    }
    if (rated) return;
    if (this.book.rating > rating && this.book.rating >= 0.1) this.book.rating -= 0.1;
    else if (this.book.rating < rating && this.book.rating <= 4.9) this.book.rating += 0.1;
    
    if (localStorage.getItem("rated") == null) {
      let rated = [{
        username: this.user.username,
        book: this.book.title,
        rate: rating
      }]
      localStorage.setItem("rated", JSON.stringify(rated));
    }
    else {
      let ratings = JSON.parse(localStorage.getItem("rated"));
      let rated = {
        username: this.user.username,
        book: this.book.title,
        rate: rating
      }
      ratings.push(rated);
      localStorage.setItem("rated", JSON.stringify(ratings));
    }    
    this.saveState();
  }

  setComment() {
    let com = {
      name: this.user.firstName + " " + this.user.lastName,
      comment: this.comment
    };
    this.book.comments.push(com);
    this.comment = "";
    this.saveState();
  }

  saveState() {
    let allBooks:Book[] = JSON.parse(localStorage.getItem("allBooks"));
    let updatedBooks: Book[] = [];
    allBooks.forEach(book => {
      if (book.title == this.book.title) {
        updatedBooks.push(this.book);
      }
      else {
        updatedBooks.push(book);
      }
    });
    localStorage.setItem("allBooks", JSON.stringify(updatedBooks));
    localStorage.setItem("book", JSON.stringify(this.book));
  }

}
