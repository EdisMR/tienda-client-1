import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdexPageComponent } from './idex-page.component';

describe('IdexPageComponent', () => {
  let component: IdexPageComponent;
  let fixture: ComponentFixture<IdexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdexPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
