import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'list',component:ListComponent},

  //PARA QUE EXISTA HIJOS DENTRO DE UN PATH
  {
    path: '',
    component: MenuComponent,
    children: [{ path: 'detail/:id', component: DetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
