import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAlbum } from './cad-album';

describe('CadAlbum', () => {
  let component: CadAlbum;
  let fixture: ComponentFixture<CadAlbum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadAlbum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadAlbum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
