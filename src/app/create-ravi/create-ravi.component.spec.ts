import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRaviComponent } from './create-ravi.component';

describe('CreateRaviComponent', () => {
  let component: CreateRaviComponent;
  let fixture: ComponentFixture<CreateRaviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRaviComponent]
    });
    fixture = TestBed.createComponent(CreateRaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
