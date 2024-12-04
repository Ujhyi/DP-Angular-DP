import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesComparisionComponent } from './devices-comparision.component';

describe('DevicesComparisionComponent', () => {
  let component: DevicesComparisionComponent;
  let fixture: ComponentFixture<DevicesComparisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevicesComparisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicesComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
