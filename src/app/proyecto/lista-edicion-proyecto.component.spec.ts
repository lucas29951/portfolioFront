import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEdicionProyectoComponent } from './lista-edicion-proyecto.component';

describe('ListaEdicionProyectoComponent', () => {
  let component: ListaEdicionProyectoComponent;
  let fixture: ComponentFixture<ListaEdicionProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEdicionProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEdicionProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
