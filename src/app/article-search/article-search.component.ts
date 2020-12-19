import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  count: number;
  articleList: Article[];

  private articleListUrl = environment.API_URL + '/articles?page=1';
  
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
      this.httpClient.get(this.articleListUrl)
        .subscribe(
          response => {
            this.articleList = <Array<Article>> response['hydra:member'];
            console.log(this.articleList);
          },
          error => {
            console.log(error);
          }
        );
  }

}

export class Article {

  constructor(
    private title: string
  ) {}

  getTitle = () => this.title;
}

export type EntityReference = string;

export type Entity = {
  "@id": EntityReference;
};

