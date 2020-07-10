import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoirEditComponent } from './devoir-edit.component';

describe('DevoirEditComponent', () => {
  let component: DevoirEditComponent;
  let fixture: ComponentFixture<DevoirEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoirEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoirEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
