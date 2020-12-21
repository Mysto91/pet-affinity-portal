import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { SendArticleListService } from '../service/send-article-list.service';

@Component({
  selector: 'app-diagonal-box',
  templateUrl: './diagonal-box.component.html',
  styleUrls: ['./diagonal-box.component.css']
})
export class DiagonalBoxComponent implements OnInit {

  articleList : any;

  subscription;

  constructor(private data : SendArticleListService) { }

  ngOnInit(): void {
    this.subscription = this.data.accessMessage().subscribe(msg => this.articleList = msg);
  }

  ngAfterViewInit() : void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
