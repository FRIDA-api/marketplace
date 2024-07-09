import { DocumentationTabComponent } from './documentation-tab.component';
import {MockBuilder, MockedComponentFixture, MockRender, MockService} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {ActivatedRoute} from "@angular/router";
import {By} from "@angular/platform-browser";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

describe('DocumentationTabComponent', () => {
  let component: DocumentationTabComponent;
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
    return MockBuilder(DocumentationTabComponent)
      .keep(TranslateModule.forRoot())
      .provide([provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()])
      .provide({
        provide: ActivatedRoute,
        useValue: MockService(ActivatedRoute),
      })
      .then(() => {
        fixture = MockRender(DocumentationTabComponent, mockData);
        component = fixture.point.componentInstance;
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show github button', () => {
    component.apiInformation = {
      id: "",
      languageKey: "",
      iconPath: "",
      tags: [],
      githubLink: "github-link",
      swaggerPath: ""
    };
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css("#view-on-github-container"))).not.toBeNull();
  });

  it('should not show github button', () => {
    component.apiInformation = {
      id: "",
      languageKey: "",
      iconPath: "",
      tags: [],
      githubLink: "",
      swaggerPath: ""
    };
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css("#view-on-github-container"))).toBeNull();
  });

  it('should show coming soon text', () => {
    component.apiInformation = {
      id: "",
      languageKey: "",
      iconPath: "",
      tags: [],
      githubLink: "",
      swaggerPath: ""
    };
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#no-swagger-container'))).not.toBeNull();
  });

  it('should not show coming soon text', () => {
    component.apiInformation = {
      id: "",
      languageKey: "",
      iconPath: "",
      tags: [],
      githubLink: "",
      swaggerPath: "swagger-path"
    };
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#no-swagger-container'))).toBeNull();
  });
});
