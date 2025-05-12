import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedcircleComponent } from './redcircle.component';

describe('RedcircleComponent', () => {
  let component: RedcircleComponent;
  let fixture: ComponentFixture<RedcircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedcircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedcircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
