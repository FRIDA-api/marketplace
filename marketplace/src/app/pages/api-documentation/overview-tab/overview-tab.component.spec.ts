import { OverviewTabComponent } from './overview-tab.component';
import {MockBuilder, MockedComponentFixture, MockRender} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";

describe('OverviewTabComponent', () => {
  let component: OverviewTabComponent;
  let fixture: MockedComponentFixture;

  const mockData = {
    apiInformation: {
      id: "pension-api",
      languageKey: "PENSION_API",
      iconPath: "./assets/icons/icon-pensionapi.svg",
      tags: [
        "PENSION"
      ],
      githubLink: "https://github.com/FRIDA-api/FRIDA-pension",
      swaggerPath: "/assets/api/FRIDA_PensionInformation_OA3_full_en.yaml"
    }
  }

  beforeEach(async () => {
    return MockBuilder(OverviewTabComponent)
      .keep(TranslateModule.forRoot())
      .then(() => {
        fixture = MockRender(OverviewTabComponent, mockData);
        component = fixture.point.componentInstance;
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
