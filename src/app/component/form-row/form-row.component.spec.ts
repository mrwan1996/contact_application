import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRowComponent } from './form-row.component';

describe('FormRowComponent', () => {
  let component: FormRowComponent;
  let fixture: ComponentFixture<FormRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRowComponent]
    });
    fixture = TestBed.createComponent(FormRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
