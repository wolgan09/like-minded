import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule ,MatToolbarModule,
     NoopAnimationsModule,MatIconModule,
     MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
