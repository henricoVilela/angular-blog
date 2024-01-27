import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public noticiasSecundarias: any[] = [];
  public noticiaPrincipal: any ;

  constructor() { }

  ngOnInit(): void {
    this.noticiasSecundarias = dataFake.filter(data => !data.principal);
    this.noticiaPrincipal = dataFake.filter(data => data.principal)[0];
  }

}
