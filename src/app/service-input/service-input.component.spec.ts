import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceInputComponent } from './service-input.component';

describe('ServiceInputComponent', () => {
  let component: ServiceInputComponent;
  let fixture: ComponentFixture<ServiceInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServiceInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
