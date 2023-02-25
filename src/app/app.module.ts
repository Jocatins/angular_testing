import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StenghtPipe } from './pipes/Strenght/stenght.pipe';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [AppComponent, StenghtPipe, PostsComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
