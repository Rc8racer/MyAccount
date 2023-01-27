import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOrganiserComponent } from './time-organiser.component';

describe('TimeOrganiserComponent', () => {
  let component: TimeOrganiserComponent;
  let fixture: ComponentFixture<TimeOrganiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeOrganiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOrganiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
