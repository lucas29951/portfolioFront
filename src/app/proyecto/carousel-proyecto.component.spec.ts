import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProyectoComponent } from './carousel-proyecto.component';

describe('CarouselProyectoComponent', () => {
  let component: CarouselProyectoComponent;
  let fixture: ComponentFixture<CarouselProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
