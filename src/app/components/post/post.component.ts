import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  // we define a child component with an @Input property named post. .
  @Input() post!: Post;
  // we define a child component with an @Output property named delete
  @Output() delete = new EventEmitter<Post>();
  //When the child component's button is clicked, the onDeletePost method is called,
  //which emits the delete event using the emit method of the EventEmitter object.

  onDeletePost(event: Event) {
    event.stopPropagation();
    this.delete.emit(this.post);
  }
}
