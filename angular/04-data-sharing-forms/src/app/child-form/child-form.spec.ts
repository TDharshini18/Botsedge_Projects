import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildForm } from './child-form';

describe('ChildForm', () => {
  let component: ChildForm;
  let fixture: ComponentFixture<ChildForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
