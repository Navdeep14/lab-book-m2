import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookComponent } from './list-book.component';

describe('ListBookComponent', () => {
  let comp: ListBookComponent;
  let fix: ComponentFixture<ListBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fix = TestBed.createComponent(ListBookComponent);
    comp = fix.componentInstance;
    fix.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
