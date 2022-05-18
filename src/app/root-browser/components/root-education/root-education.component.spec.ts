import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootEducationComponent } from './root-education.component';

describe('RootEducationComponent', () => {
  let component: RootEducationComponent;
  let fixture: ComponentFixture<RootEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
