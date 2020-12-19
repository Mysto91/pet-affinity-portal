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
      this.httpClient.get<jsonResponse>(this.articleListUrl)
        .subscribe(
          response => {
            this.count = response.totalItems;
            //console.log(response.data['hydra:member']);
            /*this.articleList = response.items.map(item => new Article(item.volumeInfo.title));*/
            console.log(environment.API_URL);
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
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

export type EntityReference = string;

export type Entity = {
  "@id": EntityReference;
};

export type HydraCollectionResponse<T extends Entity> = {
  "hydra:totalItems": number;
  "hydra:view": {
    "hydra:first": string;
    "hydra:last": string;
    "hydra:next": string;
  };
  "hydra:member": T[];
};
