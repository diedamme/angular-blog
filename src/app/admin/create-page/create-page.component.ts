import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Post } from "src/app/shared/interfaces";
import { PostsService } from "../shared/post.service";
import { AlertService } from "../shared/services/alert.service";

@Component({
  selector: "app-create-page",
  templateUrl: "./create-page.component.html",
  styleUrls: ["./create-page.component.scss"],
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  constructor(
    private posts: PostsService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const post: Post = {
      title: this.form.get("title").value,
      text: this.form.get("text").value,
      author: this.form.get("author").value,
      date: new Date(),
    };
    this.posts.create(post).subscribe(() => {
      this.form.reset();
      this.alertService.success("Пост был создан");
    });
  }
}
