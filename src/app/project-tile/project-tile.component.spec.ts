import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectTileComponent} from './project-tile.component';

describe('ProjectComponent', () => {
  let component: ProjectTileComponent;
  let fixture: ComponentFixture<ProjectTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTileComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
