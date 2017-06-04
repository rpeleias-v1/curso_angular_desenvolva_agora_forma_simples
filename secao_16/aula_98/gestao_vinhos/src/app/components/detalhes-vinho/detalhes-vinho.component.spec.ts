import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesVinhoComponent } from './detalhes-vinho.component';

describe('DetalhesVinhoComponent', () => {
  let component: DetalhesVinhoComponent;
  let fixture: ComponentFixture<DetalhesVinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesVinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesVinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
