import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocumentationComponent } from './api-documentation.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from "@angular/common/http/testing";

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

  it('should map pension-api path to FRIDA-pension repository', () => {
    component.apiPathParameter = 'pension-api'
    expect(component.mapPathToRepository()).toEqual('FRIDA-pension')
  });

  it('should map car-claims-api path to FRIDA-car repository', () => {
    component.apiPathParameter = 'car-claims-api'
    expect(component.mapPathToRepository()).toEqual('FRIDA-car')
  });

  it('should map random path to empty string', () => {
    component.apiPathParameter = 'random'
    expect(component.mapPathToRepository()).toEqual('')
  });

});
