import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationTabComponent } from './documentation-tab.component';

describe('DocumentationTabComponent', () => {
  let component: DocumentationTabComponent;
  let fixture: ComponentFixture<DocumentationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentationTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
