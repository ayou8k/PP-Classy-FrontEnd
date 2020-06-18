import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantemListComponent } from './etudiantem-list.component';

describe('EtudiantemListComponent', () => {
  let component: EtudiantemListComponent;
  let fixture: ComponentFixture<EtudiantemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
