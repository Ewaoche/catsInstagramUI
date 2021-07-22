import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthsLayoutComponent } from './auths-layout.component';

describe('AuthsLayoutComponent', () => {
  let component: AuthsLayoutComponent;
  let fixture: ComponentFixture<AuthsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
