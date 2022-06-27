import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartesVisiteComponent } from './cartes-visite.component';

describe('CartesVisiteComponent', () => {
  let component: CartesVisiteComponent;
  let fixture: ComponentFixture<CartesVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartesVisiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartesVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
