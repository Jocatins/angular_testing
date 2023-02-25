import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/Post/post.service';
import { PostComponent } from '../post/post.component';
import { PostsComponent } from './posts.component';

describe('Posts Component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        body: 'body 1',
        title: 'title 1',
      },
      {
        id: 2,
        body: 'body 2',
        title: 'title 2',
      },
      {
        id: 3,
        body: 'body 3',
        title: 'title 3',
      },
      {
        id: 4,
        body: 'body 4',
        title: 'title 4',
      },
    ];
    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
    //  component = new PostsComponent(mockPostService);

    TestBed.configureTestingModule({
      declarations: [PostsComponent, PostComponent],
      providers: [
        {
          provide: PostService,
          useValue: mockPostService,
        },
      ],
    });
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  it('should set posts directly from the service', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    // component.ngOnInit();
    fixture.detectChanges();
    expect(component.posts.length).toBe(4);
  });
  it('should create one post Child Element for each post', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const postElement = debugElement.queryAll(By.css('.posts'));
    expect(postElement.length).toEqual(POSTS.length);
  });

  describe('delete method', () => {
    beforeEach(() => {
      // of method to return an observable, passed through with a boolean value
      mockPostService.deletePost.and.returnValue(of(true));
      // first the component needs to have the post data
      component.posts = POSTS;
    });
    it('should delete the selected post', () => {
      component.deletePost(POSTS[1]);
      expect(component.posts.length).toBe(3);
    });
    it('should delete the actual post selected', () => {
      component.deletePost(POSTS[1]);

      for (let post of component.posts) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });
    it('should call the delete method twice', () => {
      component.deletePost(POSTS[1]);
      component.deletePost(POSTS[1]);

      expect(mockPostService.deletePost).toHaveBeenCalledTimes(2);
    });
  });
});
