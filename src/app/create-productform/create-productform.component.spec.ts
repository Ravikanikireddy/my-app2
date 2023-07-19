import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductformComponent } from './create-productform.component';

describe('CreateProductformComponent', () => {
  let component: CreateProductformComponent;
  let fixture: ComponentFixture<CreateProductformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProductformComponent]
    });
    fixture = TestBed.createComponent(CreateProductformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
