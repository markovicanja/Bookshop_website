import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allRecommendations } from '../data/recommendations';
import { allUsers } from '../data/users';
import { Book } from '../model/book.model';
import { Recommendations } from '../model/recommendations.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;
  book: Book;
  username: string;
  allRecommendations: Recommendations[];
  msg: string;
  successMsg: string;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) this.router.navigate(["login"]);
    this.book = JSON.parse(localStorage.getItem("book"));
    if (this.book == null) this.router.navigate(["login"]);

    if (localStorage.getItem("allRecommendations") == null) {
      this.allRecommendations = allRecommendations;
      localStorage.setItem("allRecommendations", JSON.stringify(this.allRecommendations));
    }
    else {
      this.allRecommendations = JSON.parse(localStorage.getItem("allRecommendations"));
    }  

    this.username = "";
  }

  recommend() {
    this.msg = "";
    this.successMsg = "";
    let found = false;
    let users = JSON.parse(localStorage.getItem("allUsers"));
    if (users == null) users = allUsers;
    users.forEach(user => {
      if (user.username == this.username) {
        found = true;
        return;
      }
    });
    if (!found) {
      this.msg = "Uneti korisnik nije pronadjen!"
      return;
    }

    let rec = {
      book: this.book,
      username: this.user.username
    }

    found = false;
    this.allRecommendations.forEach(r => {
      if (r.user == this.username) {
        found = true;
        r.recommendations.push(rec);
        return;
      }
    });
    if (!found) {
      let newRec = {
        user: this.username,
        recommendations: [rec]
      }
      this.allRecommendations.push(newRec);
    }
    this.successMsg = "Uspešno ste preporučili knjigu!";
    localStorage.setItem("allRecommendations", JSON.stringify(this.allRecommendations));
  }

}
