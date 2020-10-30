import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafiaaAppComponent } from './safiaa-app.component';

describe('SafiaaAppComponent', () => {
  let component: SafiaaAppComponent;
  let fixture: ComponentFixture<SafiaaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafiaaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafiaaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
