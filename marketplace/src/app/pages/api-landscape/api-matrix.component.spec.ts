import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMatrixComponent } from './api-matrix.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiLandscapeComponent', () => {
  let component: ApiMatrixComponent;
  let fixture: ComponentFixture<ApiMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiMatrixComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
