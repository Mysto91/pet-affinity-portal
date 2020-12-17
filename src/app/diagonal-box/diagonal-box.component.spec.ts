import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonalBoxComponent } from './diagonal-box.component';

describe('DiagonalBoxComponent', () => {
  let component: DiagonalBoxComponent;
  let fixture: ComponentFixture<DiagonalBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagonalBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagonalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
