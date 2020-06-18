import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementmoduleListComponent } from './elementmodule-list.component';

describe('ElementmoduleListComponent', () => {
  let component: ElementmoduleListComponent;
  let fixture: ComponentFixture<ElementmoduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementmoduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementmoduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
