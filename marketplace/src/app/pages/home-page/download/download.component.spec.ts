import {DownloadComponent} from './download.component';
import {MockBuilder, MockedComponentFixture, MockRender} from "ng-mocks";
import {CommonModule} from "@angular/common";

describe('DownloadComponent', () => {
  let component: DownloadComponent;
  let fixture: MockedComponentFixture<DownloadComponent, { apiPathParameter: string }>;

  beforeEach(() => MockBuilder(DownloadComponent).keep(CommonModule).then(() => {
    fixture = MockRender(DownloadComponent, {apiPathParameter: 'pension-api',});
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
