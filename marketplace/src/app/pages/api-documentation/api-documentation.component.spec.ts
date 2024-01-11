import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocumentationComponent } from './api-documentation.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ApiDocumentationComponent', () => {
  let component: ApiDocumentationComponent;
  let fixture: ComponentFixture<ApiDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDocumentationComponent, MatExpansionModule, BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
