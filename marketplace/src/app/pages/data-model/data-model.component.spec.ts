import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModelComponent } from './data-model.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataModelComponent', () => {
  let component: DataModelComponent;
  let fixture: ComponentFixture<DataModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataModelComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
