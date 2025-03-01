import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbstractTransportComponent } from './abstract-transport.component';

describe('AbstractTransportComponent', () => {
  let component: AbstractTransportComponent;
  let fixture: ComponentFixture<AbstractTransportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AbstractTransportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AbstractTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
