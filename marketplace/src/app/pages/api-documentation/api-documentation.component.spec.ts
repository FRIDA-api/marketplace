import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocumentationComponent } from './api-documentation.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from "@angular/common/http/testing";

const data = require('assets/data/api-documentation.json');

describe('ApiDocumentationComponent', () => {
  let component: ApiDocumentationComponent;
  let fixture: ComponentFixture<ApiDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDocumentationComponent, MatExpansionModule, BrowserAnimationsModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find company matching to path', () => {
    expect(component.findMatchingApi(data, "pension-api")).toEqual('/assets/api/FRIDA_PensionInformation_OA3_full_en.yaml');
    expect(component.findMatchingApi(data, "car-claims-api")).toEqual('/assets/api/FRIDA_CAR_OA3_full.en.yaml');
  });

  it('should not find company matching to fake path', () => {
    expect(component.findMatchingApi(data, "not-existing-path")).toEqual('');
  });

  it('should not find company matching to undefined path', () => {
    expect(component.findMatchingApi(data, undefined)).toEqual('');
  });
});
