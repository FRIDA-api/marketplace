import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationTabComponent } from './documentation-tab.component';
import {MockBuilder, MockRender, MockService} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ActivatedRoute} from "@angular/router";

describe('DocumentationTabComponent', () => {
  let component: DocumentationTabComponent;
  let fixture: ComponentFixture<DocumentationTabComponent>;

  beforeEach(async () => {
    return MockBuilder(DocumentationTabComponent)
      .keep(TranslateModule.forRoot())
      .keep(HttpClientTestingModule)
      .provide({
        provide: ActivatedRoute,
        useValue: MockService(ActivatedRoute),
      })
      .then(() => {
        fixture = MockRender(DocumentationTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
