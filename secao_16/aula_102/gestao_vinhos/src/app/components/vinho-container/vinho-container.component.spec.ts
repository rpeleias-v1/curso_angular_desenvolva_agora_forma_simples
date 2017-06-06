import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinhoContainerComponent } from './vinho-container.component';

describe('VinhoContainerComponent', () => {
  let component: VinhoContainerComponent;
  let fixture: ComponentFixture<VinhoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinhoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinhoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
