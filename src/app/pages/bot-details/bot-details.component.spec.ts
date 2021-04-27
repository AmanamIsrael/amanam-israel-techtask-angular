import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotDetailsComponent } from './bot-details.component';

describe('BotDetailsComponent', () => {
  let component: BotDetailsComponent;
  let fixture: ComponentFixture<BotDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
