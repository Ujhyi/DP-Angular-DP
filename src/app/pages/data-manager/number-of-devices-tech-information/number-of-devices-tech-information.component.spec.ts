import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfDevicesTechInformationComponent } from './number-of-devices-tech-information.component';

describe('NumberOfDevicesTechInformationComponent', () => {
  let component: NumberOfDevicesTechInformationComponent;
  let fixture: ComponentFixture<NumberOfDevicesTechInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberOfDevicesTechInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOfDevicesTechInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
