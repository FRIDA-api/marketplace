
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MockBuilder, MockRender, MockService, MockedComponentFixture } from 'ng-mocks';
import { UseCaseCardComponent } from './use-case-card.component';


describe('UseCaseCardComponent', () => {
  let component: UseCaseCardComponent;
  let fixture: MockedComponentFixture;
  const tagDataMock = [
    {
      "tagId": "pension",
      "tagNameDE": "Pension",
      "tagNameEN": "Pension",
      "tagColor": "#6FBEAB"
    }];
    const apiDataMock = 
      {
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
  beforeEach(() =>
    MockBuilder(UseCaseCardComponent)
      .keep(TranslateModule.forRoot())
      .provide({
        provide: ActivatedRoute,
        useValue: MockService(ActivatedRoute),
      })
      .then(() => {
        fixture = MockRender(UseCaseCardComponent, {apiData: apiDataMock, tagsData: tagDataMock});
        component = fixture.point.componentInstance;
      })
  );
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create Without tagData', () => {
    const fixture = MockRender(UseCaseCardComponent, {apiData: apiDataMock, tagsData: null});
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });
});
