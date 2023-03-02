import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Post } from './../../models/Post';
import { PostComponent } from './post.component';
import { first } from 'rxjs';
import { By } from '@angular/platform-browser';

let fixture: ComponentFixture<PostComponent>;
let component: PostComponent;

describe('Post Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

  it('should create a component using TestBed', () => {
    expect(component).toBeDefined();
  });

  it('should raise an event when the delete post is clicked', () => {
    const post: Post = { id: 1, title: 'post 1', body: 'body 1' };
    component.post = post;
    component.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });
    component.onDeletePost(new MouseEvent('click'));
  });
  it('should render the post title in the anchor element', () => {
    const post: Post = { id: 1, title: 'title 1', body: 'body 1' };
    component.post = post;
    fixture.detectChanges();
    const postElement: HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title);
  });
  it('should render the post title in the anchor element using debug elt', () => {
    const post: Post = { id: 1, title: 'title 1', body: 'body 1' };
    component.post = post;
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const aElement = postDebugElement.query(By.css('a')).nativeElement;
    expect(aElement.textContent).toContain(post.title);
  });
  it('should render the post body in paragraph element', () => {
    const post: Post = { id: 2, title: 'title 2', body: 'body 2' };
    component.post = post;
    fixture.detectChanges();
    const pElement: HTMLElement = fixture.nativeElement;
    const p = pElement.querySelector('p');
    expect(p?.textContent).toContain(post.body);
  });
});
