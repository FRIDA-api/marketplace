import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLandscapeComponent } from './api-landscape.component';

describe('ApiLandscapeComponent', () => {
  let component: ApiLandscapeComponent;
  let fixture: ComponentFixture<ApiLandscapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiLandscapeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
