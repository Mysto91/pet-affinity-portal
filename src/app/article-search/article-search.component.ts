import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  count: number;
  articleList: Article[];

  private articleListUrl = 'https://www.googleapis.com/books/v1/volumes?q=extreme%20programming';
  
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
      this.httpClient.get<jsonResponse>(this.articleListUrl)
        .subscribe(response => {
            this.count = response.totalItems;

            this.articleList = response.items.map(item => new Article(item.volumeInfo.title));

            console.log(this.articleList);
        });
  }

}

export interface jsonResponse {
  totalItems: number;
  items: Array<{
    volumeInfo: {
        title: string;
    }
  }>;
}

export class Article {

  constructor(
    private title: string
  ) {}

  getTitle = () => this.title;
}
