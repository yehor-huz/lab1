import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacultyPageComponent } from './faculty-page.component';

describe('FacultyPageComponent', () => {
  let component: FacultyPageComponent;
  let fixture: ComponentFixture<FacultyPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FacultyPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FacultyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
