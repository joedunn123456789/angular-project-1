import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeWall } from './badge-wall';

describe('BadgeWall', () => {
  let component: BadgeWall;
  let fixture: ComponentFixture<BadgeWall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeWall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeWall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
