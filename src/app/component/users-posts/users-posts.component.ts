import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/helpers/services/posts.service';
import { Post } from 'src/app/model/post.interface';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css'],
})
export class UsersPostsComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe({
      next: (params) => {
        this.userId = params['id'];
      },
    });
  }

  ngOnInit(): void {
    this.getPostByUser(this.userId);
  }

  posts: Post[] = [];
  userId: number = 0;

  getPostByUser(userId: number) {
    this.postService.getPostsByUser(userId).subscribe({
      next: (result: any) => {
        this.posts = result['posts'];
      },
    });
  }

  private getUserId() {
    this.route.params.subscribe({
      next: (params) => {
        this.userId = params['id'];
      },
    });
  }
}
