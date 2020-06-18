import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantemEditComponent } from './etudiantem-edit.component';

describe('EtudiantemEditComponent', () => {
  let component: EtudiantemEditComponent;
  let fixture: ComponentFixture<EtudiantemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
