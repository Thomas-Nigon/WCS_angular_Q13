import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPokemonPageComponent } from './add-pokemon-page.component';

describe('AddPokemonPageComponent', () => {
  let component: AddPokemonPageComponent;
  let fixture: ComponentFixture<AddPokemonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPokemonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
