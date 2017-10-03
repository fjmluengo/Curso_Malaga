import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamientos',
  templateUrl: './pensamientos.component.html',
  styleUrls: ['./pensamientos.component.css']
})
export class PensamientosComponent implements OnInit {

  sPensamiento: string;
  aPensamientos: Array<string>;

  constructor() { }

  ngOnInit() {

    this.aPensamientos = [];
  }

  btnAniadir(oEv) {

    if (this.sPensamiento.length > 0) {

      this.aPensamientos.push(this.sPensamiento);
      this.sPensamiento = '';
    }
  }

}
