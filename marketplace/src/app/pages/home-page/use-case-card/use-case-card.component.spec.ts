
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MockBuilder, MockRender, MockService, MockedComponentFixture } from 'ng-mocks';
import { UseCaseCardComponent } from './use-case-card.component';


describe('UseCaseCardComponent', () => {
  let component: UseCaseCardComponent;
  let fixture: MockedComponentFixture;
  const tagDataMock = [
    {
      id: "health",
      tagNameDE: "Health",
      tagNameEN: "Health",
      tagColor: "#000000"
    },
    {
      id: "pension",
      tagNameDE: "Pension",
      tagNameEN: "Pension",
      tagColor: "#6FBEAB"
    }
  ];
  const apiDataMock = {
    id: "pension-api",
    languageKey: "PENSION_API",
    iconPath: "./assets/icons/icon-pensionapi.svg",
    tags: [
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

  it('should find matching tag', () => {
    expect(component.tagComputed().length).toEqual(1);
    expect(component.tagComputed()[0].id).toEqual('pension');
  });
});
