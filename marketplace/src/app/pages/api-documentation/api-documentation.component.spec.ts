import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ApiDocumentationComponent } from './api-documentation.component';
import { TranslateModule } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UseCaseApiService } from "@common/services/use-case-api.service";
import { TagsApiService } from "@common/services/tags-api.service";

describe('ApiDocumentationComponent', () => {
  let component: ApiDocumentationComponent;
  let fixture: ComponentFixture<ApiDocumentationComponent>;

  const mockUseCaseInformation = [
    {
      id: "pension-api",
      languageKey: "PENSION_API",
      iconPath: "./assets/icons/icon-pensionapi.svg",
      tags: [
        "PENSION"
      ],
      githubLink: "https://github.com/FRIDA-api/FRIDA-pension",
      swaggerPath: "/assets/api/pension-api.yaml"
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
      swaggerPath: "/assets/api/car-claims-api.yaml"
    }
  ];

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
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        MatTabsModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => "pension-api" } } } },
        { provide: UseCaseApiService, useValue: { getUseCaseInformation: () => mockUseCaseInformation } },
        { provide: TagsApiService, useValue: { getTagInformation: () => mockTags } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiDocumentationComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("apiPathParameter", "pension-api");
    fixture.detectChanges();
  });

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
      swaggerPath: "/assets/api/pension-api.yaml"
    });
  });

  it('should find matching tags', () => {
    expect(component.tags).toEqual([{
      "id": "PENSION",
      "tagColor": "#6FBEAB"
    }]);
  });

  it('should not find api information', () => {
    // Simulate changing input and reinvoking ngOnInit
    fixture.componentRef.setInput("apiPathParameter" , "nonsense");
    component.ngOnInit();
    expect(component.apiInformation).not.toBeDefined();
  });
});
