import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent, Dialog } from './home/home.component';
import { InfoComponent } from './info/info.component';

import { YoutubePlayerModule } from 'ng2-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdDialogModule,MatButtonModule,MatPaginatorModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Dialog,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YoutubePlayerModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Dialog]
})
export class AppModule { }
