import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Task3Component } from './task3.component';

describe('Task3Component', () => {
  let component: Task3Component;
  let fixture: ComponentFixture<Task3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Task3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Task3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
