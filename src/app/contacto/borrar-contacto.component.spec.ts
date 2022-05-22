import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarContactoComponent } from './borrar-contacto.component';

describe('BorrarContactoComponent', () => {
  let component: BorrarContactoComponent;
  let fixture: ComponentFixture<BorrarContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
