import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    MatDividerModule,
    NgOptimizedImage
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  pensionAPI: ApiDetails = {
    name: "Pension API",
    shortDescription: "The FRIDA use case focuses on the provision of data for transparency in retirement provision, e.g. using a pension cockpit",
    iconPath: "./assets/icons/pension-api.png"
  }
  healthCareAPI: ApiDetails = {
    name: "Health-Care API",
    shortDescription: "The FRIDA use case focuses on use cases in the healthcare sector, e.g. integrated contract and benefit management",
    iconPath: "./assets/icons/health-care-api.png"
  }
  carClaimsAPI: ApiDetails = {
    name: "Car-Claims API",
    shortDescription: "The FRIDA use case focuses on the exchange of insurance data in the event of a claim, e.g. via wallet",
    iconPath: "./assets/icons/car-claims-api.png"
  }
  cyberAPI: ApiDetails = {
    name: "Cyber API",
    shortDescription: "The FRIDA use case focuses on use cases in the context of cyber insurance, e.g. the standardization of key risk indicators and data exchange between third-party providers and insurers",
    iconPath: "./assets/icons/cyber-api.png"
  }

  apiList: ApiDetails[] = [this.pensionAPI, this.healthCareAPI, this.carClaimsAPI, this.cyberAPI]
}

interface ApiDetails {
  name: string;
  shortDescription: string;
  iconPath: string;
}
