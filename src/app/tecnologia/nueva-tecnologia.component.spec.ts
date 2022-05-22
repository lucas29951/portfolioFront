import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTecnologiaComponent } from './nueva-tecnologia.component';

describe('NuevaTecnologiaComponent', () => {
  let component: NuevaTecnologiaComponent;
  let fixture: ComponentFixture<NuevaTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTecnologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
