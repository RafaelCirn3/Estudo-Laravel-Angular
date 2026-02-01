import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadoresForm } from './jogadores-form';

describe('JogadoresForm', () => {
  let component: JogadoresForm;
  let fixture: ComponentFixture<JogadoresForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogadoresForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogadoresForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
