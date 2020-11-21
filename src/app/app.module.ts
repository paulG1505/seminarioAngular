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
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import {AngularFireModule} from '@angular/fire'
import {AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { UserFirebaseService } from './services/user-firebase.service';

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
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
    // imports: [SweetAlert2Module],

    //=> In submodules only, overriding options from your root module:
    // imports: [SweetAlert2Module.forChild({ /* options */ })]
  ],
  providers: [
    AuthService,
    UserFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
