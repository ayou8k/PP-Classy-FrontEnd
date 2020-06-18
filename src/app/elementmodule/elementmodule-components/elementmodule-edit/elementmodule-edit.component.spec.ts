import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementmoduleEditComponent } from './elementmodule-edit.component';

describe('ElementmoduleEditComponent', () => {
  let component: ElementmoduleEditComponent;
  let fixture: ComponentFixture<ElementmoduleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementmoduleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementmoduleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
