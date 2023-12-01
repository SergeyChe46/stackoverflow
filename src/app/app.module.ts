import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentItemComponent } from './component/comment-item/comment-item.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { PostItemComponent } from './component/post-item/post-item.component';
import { PostListComponent } from './component/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostDetailComponent,
    PostListComponent,
    CommentItemComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
