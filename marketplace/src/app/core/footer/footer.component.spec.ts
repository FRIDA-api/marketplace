import { FooterComponent } from './footer.component';
import {MockBuilder, MockedComponentFixture, MockRender, MockService} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: MockedComponentFixture<FooterComponent>;

  beforeEach(async () => {
    return MockBuilder(FooterComponent)
      .keep(TranslateModule.forRoot())
      .then(() => {
        fixture = MockRender(FooterComponent);
        component = fixture.point.componentInstance;
        fixture.detectChanges();
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
