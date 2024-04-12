import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationTabComponent } from './documentation-tab.component';
import {MockBuilder, MockedComponentFixture, MockRender, MockService} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ActivatedRoute} from "@angular/router";

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
      .keep(HttpClientTestingModule)
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
});
