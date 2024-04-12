import { ComponentFixture } from '@angular/core/testing';

import { ApiDocumentationComponent } from './api-documentation.component';
import {MockBuilder, MockedComponentFixture, MockRender, MockService} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";

describe('ApiDocumentationComponent', () => {
  let component: ApiDocumentationComponent;
  let fixture: MockedComponentFixture;
  const tagDataMock = [{
    "tagId": "pension",
    "tagNameDE": "Pension",
    "tagNameEN": "Pension",
    "tagColor": "#6FBEAB"
  }];
  const apiDataMock = {
    "id": "pension-api",
    "nameDE": "PensionAPI",
    "nameEN": "PensionAPI",
    "descriptionDE": "Bereitstellung von Daten zur Transparenz in der Altersvorsorge z.B. mithilfe eines Rentencockpits.",
    "descriptionEN": "Provision of data for transparency in pension provision, e.g. with the help of a pension cockpit.",
    "iconPath": "./assets/icons/icon-pensionapi.svg",
    "tags": [
      "pension"
    ]
  };

  beforeEach(async () => {
    return MockBuilder(ApiDocumentationComponent)
      .keep(TranslateModule.forRoot())
      .provide({
        provide: ActivatedRoute,
        useValue: MockService(ActivatedRoute),
      })
      .then(() => {
        fixture = MockRender(ApiDocumentationComponent, {apiInformation: apiDataMock, tagData: tagDataMock});
        component = fixture.point.componentInstance;
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
