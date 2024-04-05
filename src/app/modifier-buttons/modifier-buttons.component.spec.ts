import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierButtonsComponent } from './modifier-buttons.component';

describe('ModifierButtonsComponent', () => {
  let component: ModifierButtonsComponent;
  let fixture: ComponentFixture<ModifierButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
