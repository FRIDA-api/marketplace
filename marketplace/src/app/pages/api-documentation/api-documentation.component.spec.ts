import { ComponentFixture } from '@angular/core/testing';

import { ApiDocumentationComponent } from './api-documentation.component';
import {MockBuilder, MockRender} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";

describe('ApiDocumentationComponent', () => {
  let component: ApiDocumentationComponent;
  let fixture: ComponentFixture<ApiDocumentationComponent>;

  beforeEach(async () => {
    return MockBuilder(ApiDocumentationComponent)
      .keep(TranslateModule.forRoot())
      .then(() => {
        fixture = MockRender(ApiDocumentationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
