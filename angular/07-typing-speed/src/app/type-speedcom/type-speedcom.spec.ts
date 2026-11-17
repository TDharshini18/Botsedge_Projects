import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeSpeedcom } from './type-speedcom.componenet'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // if your component uses forms

describe('TypeSpeedcom', () => {
  let component: TypeSpeedcom;
  let fixture: ComponentFixture<TypeSpeedcom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeSpeedcom], // <-- use declarations for components
      imports: [CommonModule, FormsModule] // modules go here if needed
    }).compileComponents();

    fixture = TestBed.createComponent(TypeSpeedcom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
  