import { ApiDocumentationComponent } from './api-documentation.component';
import {MockBuilder, MockedComponentFixture, MockRender, MockService} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ApiDocumentationComponent', () => {
  let component: ApiDocumentationComponent;
  let fixture: MockedComponentFixture;

  const mockData = {
    apiPathParameter: "pension-api",
    apiInformation: {
      "id": "pension-api",
      "nameDE": "PensionAPI",
      "nameEN": "PensionAPI",
      "descriptionDE": "Bereitstellung von Daten zur Transparenz in der Altersvorsorge z.B. mithilfe eines Rentencockpits.",
      "descriptionEN": "Provision of data for transparency in pension provision, e.g. with the help of a pension cockpit.",
      "iconPath": "./assets/icons/icon-pensionapi.svg",
      "tags": [
        "pension"
      ]
    },
    tagData: [{
      "tagId": "pension",
      "tagNameDE": "Pension",
      "tagNameEN": "Pension",
      "tagColor": "#6FBEAB"
    }]
  }

  beforeEach(async () => {
    return MockBuilder(ApiDocumentationComponent)
      .keep(TranslateModule.forRoot())
      .keep(MatTabsModule)
      .keep(BrowserAnimationsModule)
      .provide({
        provide: ActivatedRoute,
        useValue: MockService(ActivatedRoute),
      })
      .then(() => {
        fixture = MockRender(ApiDocumentationComponent, mockData);
        component = fixture.point.componentInstance;
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
