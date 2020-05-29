import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';



import { PostCardComponent } from './post-list/post-card/post-card.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './shared/UI/not-found/not-found.component'
import { MatFormFieldModule } from '../../node_modules/@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    PostDetailComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
