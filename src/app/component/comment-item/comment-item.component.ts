import { Component, Input } from '@angular/core';
import { PostComment } from 'src/app/model/comment.interface';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent {
  @Input() comment!: PostComment;
}
