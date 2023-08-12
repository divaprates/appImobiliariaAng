import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-house',
  templateUrl: './frame-house.component.html',
  styleUrls: ['./frame-house.component.scss'],
})
export class FrameHouseComponent implements OnInit{
  public linksList!: Array<string>;

  constructor(){}

  ngOnInit(): void {
    this.linksList = ['https://www.oliveiraimoveis.net/aluguel/casa/',
      'https://www.cirsa.com.br/aluguel/casa/todas-as-cidades/todos-os-bairros/0-quartos/0-suite-ou-mais/0-vaga/0-banheiro-ou-mais/todos-os-condominios?valorminimo=0&valormaximo=0&pagina=1',
      'https://www.oliveiraimoveis.net/aluguel/casa/',
      'https://www.oliveiraimoveis.net/aluguel/casa/'];
  }

}
