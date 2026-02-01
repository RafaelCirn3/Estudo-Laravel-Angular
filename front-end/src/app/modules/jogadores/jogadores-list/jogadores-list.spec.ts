import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadoresList } from './jogadores-list';

describe('JogadoresList', () => {
  let component: JogadoresList;
  let fixture: ComponentFixture<JogadoresList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogadoresList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogadoresList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
