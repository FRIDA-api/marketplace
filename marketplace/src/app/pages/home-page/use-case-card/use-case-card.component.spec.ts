import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseCardComponent } from './use-case-card.component';

describe('UseCaseCardComponent', () => {
  let component: UseCaseCardComponent;
  let fixture: ComponentFixture<UseCaseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseCaseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseCaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
