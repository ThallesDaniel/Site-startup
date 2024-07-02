import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaPrivComponent } from './politica-priv.component';

describe('PoliticaPrivComponent', () => {
  let component: PoliticaPrivComponent;
  let fixture: ComponentFixture<PoliticaPrivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaPrivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliticaPrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
