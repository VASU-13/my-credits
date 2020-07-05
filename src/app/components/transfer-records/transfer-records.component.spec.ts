import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRecordsComponent } from './transfer-records.component';

describe('TransferRecordsComponent', () => {
  let component: TransferRecordsComponent;
  let fixture: ComponentFixture<TransferRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
