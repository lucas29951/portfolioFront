import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarEstudioComponent } from './borrar-estudio.component';

describe('BorrarEstudioComponent', () => {
  let component: BorrarEstudioComponent;
  let fixture: ComponentFixture<BorrarEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
