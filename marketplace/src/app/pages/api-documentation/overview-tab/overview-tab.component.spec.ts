import { ComponentFixture } from '@angular/core/testing';

import { OverviewTabComponent } from './overview-tab.component';
import {MockBuilder, MockRender} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";

describe('OverviewTabComponent', () => {
  let component: OverviewTabComponent;
  let fixture: ComponentFixture<OverviewTabComponent>;

  beforeEach(async () => {
    return MockBuilder(OverviewTabComponent)
      .keep(TranslateModule.forRoot())
      .then(() => {
        fixture = MockRender(OverviewTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
