import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ImageModel } from '../models/image.model';
import Swal from 'sweetalert2';
import { NameModel } from '../models/name.model';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  name:NameModel={name:"Paul", age:22}

  @Input() images: ImageModel[];
  @Output() public buttonClicked: EventEmitter<NameModel> = new EventEmitter<
    NameModel
  >();
  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    Swal.fire('Any fool can use a computer');
    this.buttonClicked.emit(this.name)
  }
}
