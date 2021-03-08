import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDevComponent } from './slide-dev.component';

describe('SlideDevComponent', () => {
  let component: SlideDevComponent;
  let fixture: ComponentFixture<SlideDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
