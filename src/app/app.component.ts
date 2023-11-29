import { Component, OnInit } from '@angular/core';
import { PostsService } from './helpers/services/posts.service';
import { Post } from './model/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'stackoverflow';

  constructor(private postsService: PostsService) {}
  ngOnInit(): void {
    this.getAll();
  }

  posts: Post[] = [
    // {
    //   id: 1,
    //   title: 'His mother had always taught him',
    //   body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    //   userId: 9,
    //   tags: ['history', 'american', 'crime'],
    //   reactions: 2,
    // },
  ];
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

  menuItem: string[] = ['Main', 'About', 'Contacts'];
}
