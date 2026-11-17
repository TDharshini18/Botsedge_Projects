import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAddition } from './account-addition';

describe('AccountAddition', () => {
  let component: AccountAddition;
  let fixture: ComponentFixture<AccountAddition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountAddition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountAddition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
