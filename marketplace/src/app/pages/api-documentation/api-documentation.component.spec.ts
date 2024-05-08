import { ApiDocumentationComponent } from './api-documentation.component';
import {MockBuilder, MockedComponentFixture, MockRender, MockService} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UseCaseApiService} from "@common/services/use-case-api.service";
import {TagsApiService} from "@common/services/tags-api.service";

describe('ApiDocumentationComponent', () => {
  let component: ApiDocumentationComponent;
  let fixture: MockedComponentFixture;

  const mockUseCaseInformation = [
    {
      id: "pension-api",
      languageKey: "PENSION_API",
      iconPath: "./assets/icons/icon-pensionapi.svg",
      tags: [
        "PENSION"
      ],
      githubLink: "https://github.com/FRIDA-api/FRIDA-pension",
      swaggerPath: "/assets/api/FRIDA_PensionInformation_OA3_full_en.yaml"
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
      swaggerPath: "/assets/api/FRIDA_CAR_OA3_full.en.yaml"
    }
  ]

  const mockTags = [
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
    }
  ]

  beforeEach(() =>
    MockBuilder(ApiDocumentationComponent)
      .keep(TranslateModule.forRoot())
      .keep(MatTabsModule)
      .keep(BrowserAnimationsModule)
      .provide({
        provide: ActivatedRoute,
        useValue: MockService(ActivatedRoute),
      })
      .provide({
        provide: UseCaseApiService,
        useValue: MockService(UseCaseApiService, {
          getUseCaseInformation: () => mockUseCaseInformation
        })
      })
      .provide({
        provide: TagsApiService,
        useValue: MockService(TagsApiService, {
          getTagInformation: () => mockTags
        })
      })
      .then(() => {
        fixture = MockRender(ApiDocumentationComponent, {apiPathParameter: "pension-api"});
        component = fixture.point.componentInstance;
      })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find correct api information', () => {
    expect(component.apiInformation).toEqual({
      id: "pension-api",
      languageKey: "PENSION_API",
      iconPath: "./assets/icons/icon-pensionapi.svg",
      tags: [
        "PENSION"
      ],
      githubLink: "https://github.com/FRIDA-api/FRIDA-pension",
      swaggerPath: "/assets/api/FRIDA_PensionInformation_OA3_full_en.yaml"
    })
  });

  it('should find matching tags', () => {
    expect(component.tags).toEqual([{
      "id": "PENSION",
      "tagColor": "#6FBEAB"
    }])
  });

  it('should not find api information', () => {
    component.apiPathParameter = "nonsense";
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.apiInformation).not.toBeDefined();
    });
  });
});
