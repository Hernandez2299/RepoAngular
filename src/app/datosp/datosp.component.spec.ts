import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospComponent } from './datosp.component';

describe('DatospComponent', () => {
  let component: DatospComponent;
  let fixture: ComponentFixture<DatospComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatospComponent]
    });
    fixture = TestBed.createComponent(DatospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
