import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmImpact } from './crm-impact';

describe('CrmImpact', () => {
  let component: CrmImpact;
  let fixture: ComponentFixture<CrmImpact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmImpact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmImpact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
