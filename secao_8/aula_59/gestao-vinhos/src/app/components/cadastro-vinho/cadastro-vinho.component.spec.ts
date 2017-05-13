import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVinhoComponent } from './cadastro-vinho.component';

describe('CadastroVinhoComponent', () => {
  let component: CadastroVinhoComponent;
  let fixture: ComponentFixture<CadastroVinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroVinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
