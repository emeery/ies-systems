import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputDialogComponent } from './app-input-dialog.component';

describe('AppInputDialogComponent', () => {
  let component: AppInputDialogComponent;
  let fixture: ComponentFixture<AppInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInputDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
