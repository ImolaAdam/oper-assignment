import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmAndTVComponentComponent } from './film-and-tv.component';

describe('FilmAndTVComponentComponent', () => {
  let component: FilmAndTVComponentComponent;
  let fixture: ComponentFixture<FilmAndTVComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmAndTVComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmAndTVComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
