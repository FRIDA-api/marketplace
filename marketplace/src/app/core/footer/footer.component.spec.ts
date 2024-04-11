import { ComponentFixture } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {MockBuilder, MockedComponentFixture, MockRender, MockService} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: MockedComponentFixture<FooterComponent>;

  beforeEach(async () => {
    MockBuilder(FooterComponent)
      .keep(TranslateModule.forRoot())
      .keep(HttpClientTestingModule)
      .provide({
        provide: ActivatedRoute,
        useValue: MockService(ActivatedRoute),
      })
      .then(() => {
        fixture = MockRender(FooterComponent);
        component = fixture.point.componentInstance;
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
