import { Injectable } from '@angular/core';
import { ApiInformationModel } from "@common/models/api-information.model";

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
      githubLink: "https://github.com/FRIDA-api/FRIDA-pension",
      swaggerPath: "/assets/api/pension-api.yaml",
      livedemoLink: ""
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
      githubLink: "https://github.com/FRIDA-api/FRIDA-car",
      swaggerPath: "/assets/api/car-claims-api.yaml",
      livedemoLink: "https://carclaims.freeinsurancedata.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb2xpY3lOdW1iZXIiOiJWLTEyMy00NTYtNzg5LTAiLCJmb3JtT2ZBZGRyZXNzIjoiRnJhdSIsInRpdGxlIjoiRHIuIiwibGFzdE5hbWUiOiJNdXN0ZXJmcmF1IiwiZmlyc3ROYW1lIjoiRnJpZGEiLCJwb3N0YWxDb2RlIjoiMTIzNDUiLCJjaXR5IjoiS8O2bG4iLCJzdHJlZXROYW1lIjoiVGVzdHN0cmHDn2UiLCJob3VzZU51bWJlciI6IjU2IiwidGVsZXBob25lIjoiKzQ5IDA5IDg3NjU0MzIiLCJlbWFpbEFkZHJlc3MiOiJmcmlkYS5tdXN0ZXJmcmF1QGV4YW1wbGUuY29tIiwiaW5zdXJhbmNlQ29tcGFueSI6IkhESSIsImNoYXNzaXNOdW1iZXIiOiJVRVJURVJSMUpaM1czODU2ODIiLCJsaWNlbnNlUGxhdGUiOiJGLVhZIDEyMyIsImNhckJyYW5kIjoiQk1XIiwiY2FyTW9kZWwiOiJYMyIsImlhdCI6MTc1ODI1OTY4NH0.hCvsIROLlPMT34a7KFXDvTjVbLUFP6y3ZtFfY8sgbAA"
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
      githubLink: "",
      swaggerPath: ""
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
      githubLink: "",
      swaggerPath: ""
    },
    {
      id: "digital-documents-api",
      languageKey: "DIGITAL_DOCUMENTS_API",
      iconPath: "./assets/icons/icon-digitaldocumentsapi.svg",
      tags: [
        "DOCUMENTS",
        "INDUSTRIAL_LINES"
      ],
      githubLink: "",
      swaggerPath: ""
    },
    {
      id: "cyber-api",
      languageKey: "CYBER_API",
      iconPath: "./assets/icons/icon-cyberapi.svg",
      tags: [
        "CYBER",
        "ASSISTANCE",
        "RISK_MANAGEMENT",
        "INDUSTRIAL_LINES",
        "SMALL_BUSINESS"
      ],
      githubLink: "https://github.com/FRIDA-api/Domain-Check",
      swaggerPath: "/assets/api/Domain-Check-1.0.0.yaml"
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
      githubLink: "",
      swaggerPath: ""
    },
  ]

  getUseCaseInformation() {
    return this.useCaseInformation;
  }

}
