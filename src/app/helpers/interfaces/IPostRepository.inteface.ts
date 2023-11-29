import { Observable } from 'rxjs';
import { PostComment } from 'src/app/model/comment.interface';
import { Post } from 'src/app/model/post.interface';

export interface IPostRepository {
  getAll(limit: number, skip: number): Observable<Post[]>;

  getById(id: number): Observable<Post>;

  searchInBody(keyWord: string): Observable<Post[]>;

  getPostsByUser(userId: number): Observable<Post[]>;

  getPostComments(postId: number): Observable<PostComment[]>;
}
