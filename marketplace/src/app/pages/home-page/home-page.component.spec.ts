import { HomePageComponent } from './home-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MockBuilder, MockedComponentFixture, MockRender, MockService} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: MockedComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    return MockBuilder(HomePageComponent)
      .keep(TranslateModule.forRoot())
      .keep(HttpClientTestingModule)
      .provide({
        provide: ActivatedRoute,
        useValue: MockService(ActivatedRoute),
      })
      .then(() => {
        fixture = MockRender(HomePageComponent);
        component = fixture.point.componentInstance;
        fixture.detectChanges();
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
