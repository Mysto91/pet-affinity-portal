import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Article } from '../model/article';
import { SendArticleListService } from '../service/send-article-list.service';

@Component({
  selector: 'app-article-search',
  template: '<div>{{sendMessage()}}</div>',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  count: number;
  articleList: Article[];

  private articleListUrl = environment.API_URL + '/articles?page=1';
  
  constructor(private httpClient : HttpClient, private data : SendArticleListService) { }

  ngOnInit(): void {
      this.httpClient.get(this.articleListUrl)
        .subscribe(
          response => {
            this.count = response['hydra:totalItems'];
            this.articleList = <Array<Article>> response['hydra:member'];
          },
          error => {
            console.log(error);
          }
        );
  }

  sendMessage() : void {
    this.data.sendMessage(this.articleList);
  }

}

