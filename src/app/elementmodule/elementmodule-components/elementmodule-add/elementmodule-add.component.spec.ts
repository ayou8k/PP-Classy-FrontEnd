import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementmoduleAddComponent } from './elementmodule-add.component';

describe('ElementmoduleAddComponent', () => {
  let component: ElementmoduleAddComponent;
  let fixture: ComponentFixture<ElementmoduleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementmoduleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementmoduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
