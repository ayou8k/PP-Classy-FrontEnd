import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyoubDesignComponent } from './ayoub-design.component';

describe('AyoubDesignComponent', () => {
  let component: AyoubDesignComponent;
  let fixture: ComponentFixture<AyoubDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyoubDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyoubDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
