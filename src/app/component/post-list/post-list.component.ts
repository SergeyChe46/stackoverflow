import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/helpers/services/posts.service';
import { Post } from 'src/app/model/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  constructor(private postsService: PostsService) {}
  ngOnInit(): void {
    this.getAll();
  }

  posts: Post[] = [];
  /**
   * Получает посты.
   * @param limit
   * @param skip
   */
  getAll(limit: number = 0, skip: number = 0) {
    this.postsService.getAll(limit, skip).subscribe({
      next: (result: any) => {
        (this.posts = result['posts']), console.log(result);
      },
      error: (error) => console.log(error),
    });
  }
}
