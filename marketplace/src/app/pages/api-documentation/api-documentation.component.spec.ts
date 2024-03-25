import {
  fakeAsync
} from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PLATFORM_ID } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyInformation } from '@common/services/api-data.service';
import {
  MockBuilder,
  MockRender,
  MockedComponentFixture
} from 'ng-mocks';
import { of } from 'rxjs';
import { ApiDocumentationComponent } from './api-documentation.component';

// Need this to mock PlatformId if in specific test case
let global : {
  currentSpec: {
    description: string;
  } | null;
  } = {
    currentSpec: null
  };

class CurrentSpecReporter {
  specStarted(spec: any) {
    global.currentSpec = spec;
  }
  specDone() {
    global.currentSpec = null;
  }
}

jasmine.getEnv().addReporter(new CurrentSpecReporter());

const data = require('assets/data/api-documentation.json');

describe('ApiDocumentationComponent', () => {
  let component: ApiDocumentationComponent;
  let fixture: MockedComponentFixture;
 
  const getPlatformId = () =>  global.currentSpec?.description === 'should log "Not supported for ssr renderd files"'? 'server' : 'browser';
  beforeEach(() =>
    MockBuilder(ApiDocumentationComponent)
      .keep(MatExpansionModule)
      .keep(BrowserAnimationsModule)
      .keep(HttpClientTestingModule)
      .provide({ provide: PLATFORM_ID, useFactory: getPlatformId })
      .then(() => {
       
        fixture = MockRender(ApiDocumentationComponent, {
          apiPathParameter: 'pension-api',
        });
        component = fixture.point.componentInstance;
        fixture.detectChanges();
      })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigateByUrl', () => {
    spyOn(component['router'], 'navigateByUrl');
    component.selectApi('pension-api');
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith(
      '/api-explorer/pension-api'
    );
  });

  it('should log "Not supported for ssr renderd files"', () => {
   spyOn(console, 'log');
    component.ngOnChanges();
    expect(console.log).toHaveBeenCalledWith('Not supported for ssr renderd files');
  });
 
  it('should find company matching to path', () => {
    expect(component.findMatchingApi(data, 'pension-api')).toEqual(
      '/assets/api/FRIDA_PensionInformation_OA3_full_en.yaml'
    );
    expect(component.findMatchingApi(data, 'car-claims-api')).toEqual(
      '/assets/api/FRIDA_CAR_OA3_full.en.yaml'
    );
  });

  it('should not find company matching to fake path', () => {
    expect(component.findMatchingApi(data, 'not-existing-path')).toEqual('');
  });

  it('should not find company matching to undefined path', () => {
    expect(component.findMatchingApi(data, undefined)).toEqual('');
  });

  it('should handle companyInformation$ observable with matching dataUrl', fakeAsync(() => {
    const mockData: CompanyInformation[] = [
      {
        companyName: 'HDI',
        pathToIcon: './assets/icons/hdi-logo.png',
        categories: [
          {
            categoryName: 'Pension',
            apis: [
              {
                name: 'Get pension API',
                url: 'pension-api',
                dataUrl:
                  '/assets/api/FRIDA_PensionInformation_OA3_full_en.yaml',
              },
            ],
          },
        ],
      },
    ];
    // Set up the companyInformation$ observable with mock data
    component.companyInformation$ = of(mockData);
    component.ngOnChanges();
    expect(component.noApiFound).toBeFalse();
  }));

  it('should handle companyInformation$ observable with no matching dataUrl', fakeAsync(() => {
    const mockData: CompanyInformation[] = [
      {
        companyName: 'HDI',
        pathToIcon: './assets/icons/hdi-logo.png',
        categories: [
          {
            categoryName: 'Pension',
            apis: [],
          },
        ],
      },
    ];
    // Set up the companyInformation$ observable with mock data
    component.companyInformation$ = of(mockData);
    component.ngOnChanges();

    expect(component.noApiFound).toBeTruthy();
  }));
});
