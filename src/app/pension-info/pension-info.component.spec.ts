import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionInfoComponent } from '@src/app/pension-info/pension-info.component';

describe('PensionInfoComponent', () => {
  let component: PensionInfoComponent;
  let fixture: ComponentFixture<PensionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
