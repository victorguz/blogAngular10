import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  photo=0;

  constructor() { }

  ngOnInit(): void {
  }

  prevPhoto(){
    if(this.photo==0){
      this.photo=3;
    }else{
      this.photo+=1;
    }
  }
  nextPhoto(){
    if(this.photo==3){
      this.photo=0;
    }else{
      this.photo+=1;
    }
  }


}
