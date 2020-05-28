import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './shared/toolbars/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { PostCardComponent } from './post-list/post-card/post-card.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostCardComponent,
    PostDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
