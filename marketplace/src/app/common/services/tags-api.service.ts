import { Injectable } from '@angular/core';
import {TagModel} from "@common/models/tag.model";

@Injectable({
  providedIn: 'root'
})
export class TagsApiService {

  private readonly tagsInformation: TagModel[] = [
    {
      "id": "PENSION",
      "tagColor": "#6FBEAB"
    },
    {
      "id": "CAR",
      "tagColor": "#6693C7"
    },
    {
      "id": "CLAIMS",
      "tagColor": "#F79BE9"
    },
    {
      "id": "ASSISTANCE",
      "tagColor": "#ECDFF5"
    },
    {
      "id": "PAYMENT",
      "tagColor": "#C0C5D1"
    },
    {
      "id": "MOBILE",
      "tagColor": "#CEF5D5"
    },
    {
      "id": "INDUSTRIAL_LINES",
      "tagColor": "#D4EFF7"
    },
    {
      "id": "PROPERTY_CASUALTY",
      "tagColor": "#F4E4CB"
    },
    {
      "id": "RISK_MANAGEMENT",
      "tagColor": "#F7F7D4"
    },
    {
      "id": "CYBER",
      "tagColor": "#F7C4CC"
    },
    {
      "id": "DOCUMENTS",
      "tagColor": "#EFEFEF"
    },
    {
      "id": "HEALTH",
      "tagColor": "#7EF5F5"
    }
  ]

  getTagInformation() {
    return this.tagsInformation;
  }
}
