import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { UserDetailPipe } from './pipe/user-detail.pipe';
import { CardComponent } from './card/card.component';
import { ParentCardComponent } from './parent-card/parent-card.component';
import { Component1Component } from './componentComunication/component1/component1.component';
import { Component2Component } from './componentComunication/component2/component2.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, UserDetailPipe, CardComponent, ParentCardComponent, Component1Component, Component2Component, FormComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule, HttpClientModule, FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
