import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CarouselComponent,
    DetailsComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule

    // imports: [SweetAlert2Module],

    //=> In submodules only, overriding options from your root module:
    // imports: [SweetAlert2Module.forChild({ /* options */ })]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
