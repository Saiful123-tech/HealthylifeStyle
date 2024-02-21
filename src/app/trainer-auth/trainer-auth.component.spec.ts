import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAuthComponent } from './trainer-auth.component';

describe('TrainerAuthComponent', () => {
  let component: TrainerAuthComponent;
  let fixture: ComponentFixture<TrainerAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
