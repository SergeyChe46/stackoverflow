import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/helpers/services/posts.service';
import { Post } from 'src/app/model/post.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  post!: Post;
  postId: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.postId = params['id']));
    this.getPost(this.postId);
  }

  getPost(postId: number) {
    this.postService.getById(postId).subscribe({
      next: (postResult: Post) => {
        this.post = postResult;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
