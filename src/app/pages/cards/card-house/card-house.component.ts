import { Component, OnInit } from "@angular/core";
import { House } from "src/app/model/house";
import { HouseService } from "src/app/service/house/house.service";

@Component({
  selector: "app-card-house",
  templateUrl: "./card-house.component.html",
  styleUrls: ["./card-house.component.scss"],
})
export class CardHouseComponent implements OnInit {
  public houseList!: Array<House>;

  constructor(
    private houseService: HouseService
  ) {}

  ngOnInit() {
    this.findHouseList();

    this.houseList = [
      {
        realEstate: "Diferencial",
        code: "123",
        image:
          "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/ce/1a/b4.jpg",
        link: "https://material.angular.io/components/button/overview",
      },
      {
        realEstate: "Total",
        code: "123",
        image:
          "https://s3.imoview.com.br/diferencial/Imoveis/4608/7qmyz-whatsapp-image-2023-07-06-at-101040-1688650847.jpeg",
        link: "https://material.angular.io/components/button/overview",
      },
      {
        realEstate: "Certa",
        code: "",
        image:
          "https://system.soprojetos.com.br/files/1491/project_page_e/PAD-COD43-FOTO-1-WEB.jpg?1659015535",
        link: "https://material.angular.io/components/button/overview",
      },
      {
        realEstate: "Cirsa",
        code: "123",
        image:
          "https://images.adsttc.com/media/images/623c/4fa0/3e4b/3145/3000/001b/large_jpg/_d_ambrosio_07._copy.jpg?1648119692",
        link: "https://material.angular.io/components/button/overview",
      },
    ];
  }

  public findHouseList() {
    this.houseService.list().subscribe(
      data => {
        //this.houseList = data;
        console.log(data.value);
      }, erro => {
        console.error(erro);
      }
      
    );
  }
}
