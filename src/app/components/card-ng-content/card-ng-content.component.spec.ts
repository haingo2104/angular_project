import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNgContentComponent } from './card-ng-content.component';

describe('CardNgContentComponent', () => {
  let component: CardNgContentComponent;
  let fixture: ComponentFixture<CardNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNgContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
