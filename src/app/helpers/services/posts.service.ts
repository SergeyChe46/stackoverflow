import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostComment } from 'src/app/model/comment.interface';
import { Post } from 'src/app/model/post.interface';
import { IPostRepository } from '../interfaces/IPostRepository.inteface';

@Injectable({
  providedIn: 'root',
})
export class PostsService implements IPostRepository {
  constructor(private httpClient: HttpClient) {}

  getAll(limit: number = 0, skip: number = 0): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      `${this.MAIN_URL}?limit=${limit}&skip=${skip}`
    );
  }

  getById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.MAIN_URL}/${id}`);
  }

  searchInBody(keyWord: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.MAIN_URL}/search?q=${keyWord}`);
  }

  getPostsByUser(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.MAIN_URL}/user/${userId}`);
  }

  getPostComments(postId: number): Observable<PostComment[]> {
    return this.httpClient.get<PostComment[]>(
      `${this.MAIN_URL}/${postId}/comments`
    );
  }

  private MAIN_URL: string = 'https://dummyjson.com/posts';
}
