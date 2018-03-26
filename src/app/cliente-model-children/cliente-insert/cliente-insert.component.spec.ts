import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInsertComponent } from './cliente-insert.component';

describe('ClienteInsertComponent', () => {
  let component: ClienteInsertComponent;
  let fixture: ComponentFixture<ClienteInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
