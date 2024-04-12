import { Injectable } from '@angular/core';
import {ApiInformationModel} from "@common/models/api-information.model";

@Injectable({
  providedIn: 'root'
})
export class UseCaseApiService {

  private readonly useCaseInformation: ApiInformationModel[] = [
    {
      id: "pension-api",
      languageKey: "PENSION_API",
      iconPath: "./assets/icons/icon-pensionapi.svg",
      tags: [
        "PENSION"
      ],
      githubLink: "https://github.com/FRIDA-api/FRIDA-pension"
    },
    {
      id: "car-claims-api",
      languageKey: "CAR_CLAIMS_API",
      iconPath: "./assets/icons/icon-carclaimsapi.svg",
      tags: [
        "CAR",
        "CLAIMS",
        "ASSISTANCE",
        "PAYMENT",
        "MOBILE",
        "INDUSTRIAL_LINES"
      ],
      githubLink: "https://github.com/FRIDA-api/FRIDA-car"
    },
    {
      id: "real-estate-api-policy",
      languageKey: "REAL_ESTATE_API_POLICY",
      iconPath: "./assets/icons/icon-realestateapi.svg",
      tags: [
        "PROPERTY_CASUALTY",
        "ASSISTANCE",
        "PAYMENT",
        "RISK_MANAGEMENT",
        "INDUSTRIAL_LINES"
      ],
      githubLink: ""
    },
    {
      id: "health-care-api",
      languageKey: "HEALTH_CARE_API",
      iconPath: "./assets/icons/icon-healthcareapi.svg",
      tags: [
        "HEALTH",
        "ASSISTANCE",
        "MOBILE"
      ],
      githubLink: ""
    },
    {
      id: "digital-documents-api",
      languageKey: "DIGITAL_DOCUMENTS_API",
      iconPath: "./assets/icons/icon-digitaldocumentsapi.svg",
      tags: [
        "DOCUMENTS",
        "INDUSTRIAL_LINES"
      ],
      githubLink: ""
    },
    {
      id: "cyber-api",
      languageKey: "CYBER_API",
      iconPath: "./assets/icons/icon-cyberapi.svg",
      tags: [
        "CYBER",
        "ASSISTANCE",
        "RISK_MANAGEMENT",
        "INDUSTRIAL_LINES"
      ],
      githubLink: ""
    },
    {
      id: "real-estate-api-risk",
      languageKey: "REAL_ESTATE_API_RISK",
      iconPath: "./assets/icons/icon-realestateapi.svg",
      tags: [
        "HEALTH",
        "ASSISTANCE",
        "MOBILE"
      ],
      githubLink: ""
    }
  ]

  getUseCaseInformation() {
    return this.useCaseInformation;
  }

}
