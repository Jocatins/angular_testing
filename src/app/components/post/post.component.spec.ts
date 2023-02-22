import { PostComponent } from './post.component';
import { first } from 'rxjs';

describe('Post Component', () => {
  it('should raise an event when the delete post is clicked', () => {
    const component = new PostComponent();
    const post = component.post;

    component.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });
    component.onDeletePost(new MouseEvent('click'));
  });
});
