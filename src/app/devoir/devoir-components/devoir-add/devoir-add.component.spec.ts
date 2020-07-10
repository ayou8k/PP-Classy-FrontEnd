import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoirAddComponent } from './devoir-add.component';

describe('DevoirAddComponent', () => {
  let component: DevoirAddComponent;
  let fixture: ComponentFixture<DevoirAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoirAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoirAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
