import { Component, OnInit } from '@angular/core';

interface Curso  {
  autor: string;
  empresa: string;
  lugar: string;
  fecha: Date;
}

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  curso: Curso;

  constructor() { }

  ngOnInit() {
    this.curso = {
      autor: 'Paco',
      empresa: 'Indra',
      lugar: 'Malaga',
      fecha: new Date()
    };
  }

}
