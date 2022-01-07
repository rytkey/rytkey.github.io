import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenditionsComponent } from './renditions.component';

describe('RenditionsComponent', () => {
  let component: RenditionsComponent;
  let fixture: ComponentFixture<RenditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
