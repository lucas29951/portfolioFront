import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarTecnologiaComponent } from './borrar-tecnologia.component';

describe('BorrarTecnologiaComponent', () => {
  let component: BorrarTecnologiaComponent;
  let fixture: ComponentFixture<BorrarTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarTecnologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
