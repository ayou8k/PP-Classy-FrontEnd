import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumcoursComponent } from './forumcours.component';

describe('EtudiantemAddComponent', () => {
  let component: ForumcoursComponent;
  let fixture: ComponentFixture<ForumcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
