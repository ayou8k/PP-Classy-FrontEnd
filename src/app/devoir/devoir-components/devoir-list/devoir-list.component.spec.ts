import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoirListComponent } from './devoir-list.component';

describe('DevoirListComponent', () => {
  let component: DevoirListComponent;
  let fixture: ComponentFixture<DevoirListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoirListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
