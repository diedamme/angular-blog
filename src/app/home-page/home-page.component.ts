import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PostsService } from "../admin/shared/post.service";
import { Post } from "../shared/interfaces";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts$ = this.postsService.getAll();
  }
}
