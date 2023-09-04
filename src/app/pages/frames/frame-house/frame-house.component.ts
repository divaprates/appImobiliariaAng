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
    this.linksList = [
      // 'https://www.visaoimoveis.net/aluguel/casa/todas-as-cidades/todos-os-bairros/0-quartos/0-suite-ou-mais/0-vaga/0-banheiro-ou-mais/todos-os-condominios?valorminimo=0&valormaximo=0&pagina=1'
      
      'https://www.dommusimoveis.com.br/imoveis/para-alugar/casa'
      
      ,'https://www.cirsa.com.br/aluguel/casa--cobertura/todas-as-cidades/todos-os-bairros/0-quartos/0-suite-ou-mais/0-vaga/0-banheiro-ou-mais/todos-os-condominios?valorminimo=0&valormaximo=0&pagina=1'
      
      ,'https://www.oliveiraimoveis.net/aluguel/casa+apartamento-duplex+cobertura/'
      
      ,'http://www.realizeipatinga.com.br/pesquisar-imovel/?status=aluguel&type=casa'
      
      ,'https://www.pontualimobiliaria.com.br/buscar?order=neighborhood&availability=rent&city=Ipatinga&city=Coronel%20Fabriciano&property_type=Casa'
      
      ,'https://www.carlaoimoveismg.com.br/imovel#imoveisbusca'
      
      ,'https://www.gustavodruwe.com.br/property-search/?status=aluguel&type=casa'
      
      ,'https://locasaimoveismg.com.br/pesquisar-imoveis/'
      
      ,'https://lageimoveis.com.br/#/properties'
      
      ,'https://lageimoveis.com.br/#/properties'
      
      ,'https://mercantilimoveis.com.br/pesquisa-imoveis/?status%5B%5D=aluguel&type%5B%5D=casa]'
    ]
  }

}
