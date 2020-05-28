import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './post-list/post-list.component'
import { NotFoundComponent } from './shared/UI/not-found/not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { page: 'one' } },
  { path: 'postDetail', component: PostDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
