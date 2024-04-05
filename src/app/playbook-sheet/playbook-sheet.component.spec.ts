import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybookSheetComponent } from './playbook-sheet.component';

describe('CharacterSheetComponent', () => {
  let component: PlaybookSheetComponent;
  let fixture: ComponentFixture<PlaybookSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaybookSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaybookSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
