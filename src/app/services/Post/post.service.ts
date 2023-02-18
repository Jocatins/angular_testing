import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl: string = `https://jsonplaceholder.typicode.com/posts`;
  constructor(private http: HttpClient) {}

  public getPosts() {
    return this.http.get<Post[]>(`${this.apiUrl}`);
  }
  public deletePost(post: Post) {
    return this.http.delete(`${this.apiUrl}/${post.id}`);
  }
}
