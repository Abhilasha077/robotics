import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrobotsComponent } from './myrobots.component';

describe('MyrobotsComponent', () => {
  let component: MyrobotsComponent;
  let fixture: ComponentFixture<MyrobotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrobotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrobotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
