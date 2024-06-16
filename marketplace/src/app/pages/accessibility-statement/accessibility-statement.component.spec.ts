import { AccessibilityStatementComponent } from './accessibility-statement.component';
import {MockBuilder, MockedComponentFixture, MockRender} from "ng-mocks";
import {TranslateModule} from "@ngx-translate/core";

describe('AccessibilityStatementComponent', () => {
  let component: AccessibilityStatementComponent;
  let fixture: MockedComponentFixture<AccessibilityStatementComponent>;

  beforeEach(async () => {
    return MockBuilder(AccessibilityStatementComponent)
      .keep(TranslateModule.forRoot())
      .then(() => {
        fixture = MockRender(AccessibilityStatementComponent);
        component = fixture.point.componentInstance;
      })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
