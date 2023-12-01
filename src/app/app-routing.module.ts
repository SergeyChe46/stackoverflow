import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { UsersPostsComponent } from './component/users-posts/users-posts.component';

const routes: Routes = [
  { path: '', component: PostListComponent, pathMatch: 'full' },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'user/:id/posts', component: UsersPostsComponent },
  { path: '**', component: PostListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
