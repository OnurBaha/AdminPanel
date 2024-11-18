import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopupComponent } from './modal-popup.component';

describe('ModalPopupComponent', () => {
  let component: ModalPopupComponent;
  let fixture: ComponentFixture<ModalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
