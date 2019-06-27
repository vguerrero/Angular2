import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  articles: Article[];

  constructor() {
    //TODO: voy por la pagina 76 "Storing Multiple Article s"
    this.articles = [];

    let article1 = new Article();
    article1.link = 'http://angular.io';
    article1.title = 'Angular 2';
    article1.votes = 10;

    let article2 = new Article();
    article2.link = 'http://angular.io';
    article2.title = 'Angular 2';
    article2.votes = 10;
    this.articles = [article1, article2];
  }



  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    let newArticle=new Article();
    newArticle.title=title.value;
    newArticle.link=link.value;
    newArticle.votes=0;
    this.articles.push(newArticle);
    title.value = '';
    link.value = '';
    return false;
  }
}
