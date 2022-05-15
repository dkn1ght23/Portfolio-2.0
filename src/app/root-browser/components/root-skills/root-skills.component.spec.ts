import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootSkillsComponent } from './root-skills.component';

describe('RootSkillsComponent', () => {
  let component: RootSkillsComponent;
  let fixture: ComponentFixture<RootSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
