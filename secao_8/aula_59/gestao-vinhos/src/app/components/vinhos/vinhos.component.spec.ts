import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinhosComponent } from './vinhos.component';

describe('VinhosComponent', () => {
  let component: VinhosComponent;
  let fixture: ComponentFixture<VinhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
