import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTecnologiaComponent } from './detalle-tecnologia.component';

describe('DetalleTecnologiaComponent', () => {
  let component: DetalleTecnologiaComponent;
  let fixture: ComponentFixture<DetalleTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTecnologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
