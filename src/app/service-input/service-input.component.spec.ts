import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceInputComponent } from './service-input.component';
import { TabulatingService } from '../services-fold/tabulating.service';
import { RecursionService } from '../services-fold/recursion.service';
import { SeriesService } from '../services-fold/series.service';

describe('ServiceInputComponent', () => {
  let component: ServiceInputComponent;
  let fixture: ComponentFixture<ServiceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceInputComponent],
      providers: [TabulatingService, RecursionService, SeriesService]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log error when input values are not numbers', () => {
    spyOn(console, 'log');
    component.calculateFunction('a', 'b', 'c');
    expect(console.log).toHaveBeenCalledWith(new Error("Дані не є числами"));
  });

  it('should log error when input values are out of range', () => {
    spyOn(console, 'log');
    component.calculateFunction('-2', '2', '1.5');
    expect(console.log).toHaveBeenCalledWith(new Error("Дані виходять за межі діапазону"));
  });
});
