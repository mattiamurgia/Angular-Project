import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { UserDetailPipe } from './pipe/user-detail.pipe';
import { CardComponent } from './card/card.component';
import { ParentCardComponent } from './parent-card/parent-card.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, UserDetailPipe, CardComponent, ParentCardComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule, HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
