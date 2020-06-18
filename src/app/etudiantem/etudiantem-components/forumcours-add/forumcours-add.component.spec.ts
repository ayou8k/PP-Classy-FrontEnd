import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumcoursAddComponent } from './forumcours-add.component';

describe('EtudiantemAddComponent', () => {
  let component: ForumcoursAddComponent;
  let fixture: ComponentFixture<ForumcoursAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumcoursAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumcoursAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
