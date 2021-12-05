import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allRecommendations } from '../data/recommendations';
import { Recommendations } from '../model/recommendations.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;
  allRecommendations: Recommendations[];
  userRecommendations: Recommendations[];

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user == null) this.router.navigate(["login"]);

    if (localStorage.getItem("allRecommendations") == null) {
      this.allRecommendations = allRecommendations;
      localStorage.setItem("allRecommendations", JSON.stringify(this.allRecommendations));
    }
    else {
      this.allRecommendations = JSON.parse(localStorage.getItem("allRecommendations"));
    }  

    this.userRecommendations = [];
    this.allRecommendations.forEach(r => {
      if (r.user == this.user.username) this.userRecommendations.push(r);
    });
  }

  
}
