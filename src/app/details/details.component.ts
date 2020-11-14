import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
public id:String;
  constructor(private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
  //   this.route.paramMap.subscribe( paramMap => {
  //     this.id = paramMap.get('para');
  //     console.log(this.id);

  // })
  }


}
