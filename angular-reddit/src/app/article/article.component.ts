import { Component, OnInit, HostBinding,Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  articles: Article[];
  @Input() article: Article;

  constructor() {
    
    this.articles = [];

    let article1 = new Article();
    article1.link = 'http://angular.io';
    article1.title = 'Angular 2';
    article1.votes = 10;

    let article2 = new Article();
    article2.link = 'http://angular.io';
    article2.title = 'Angular 2';
    article2.votes = 10;
    this.articles=[article1,article2];
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
    
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }


  ngOnInit() {
  }

}
