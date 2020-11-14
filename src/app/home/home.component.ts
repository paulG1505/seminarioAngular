import { Component, OnInit,ViewChild,AfterViewInit, ChangeDetectorRef } from '@angular/core';//view chid ssaber que hace mi hijo
import {ImageModel} from '../models/image.model';
import {NameModel} from '../models/name.model'
import {MenuComponent} from '../menu/menu.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
  //crear un modelo
  public images:ImageModel[];

  @ViewChild(MenuComponent)menu; //observa al hijo
  public name:NameModel
  public valueEmitter:NameModel={name:null,age:null}

    constructor(private cdRef:ChangeDetectorRef) {
      this.name={name:'',age:0}
     }

    //luego que se inicialice el hijo
    ngAfterViewInit(){
      this.name=this.menu.name;
      console.log(this.name);
      this.cdRef.detectChanges();//detecta los cambios del hijo
    }

  ngOnInit(): void {
    this.images=[
      {
        src:"https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg",
        alt:"Imagen1",
      },
      {
        src:"https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg",
        alt:"Imagen2",
      },
      {
        src:"https://www.landuum.com/wp-content/uploads/2019/03/cultura_paisajeiluminado_landuum5.jpg",
        alt:"Imagen3",
      },
    ]
  }

  parentEventHandle(value){
    this.valueEmitter=value

  }

}
