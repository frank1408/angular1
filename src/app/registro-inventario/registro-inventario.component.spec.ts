import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInventarioComponent } from './registro-inventario.component';

describe('RegistroInventarioComponent', () => {
  let component: RegistroInventarioComponent;
  let fixture: ComponentFixture<RegistroInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
