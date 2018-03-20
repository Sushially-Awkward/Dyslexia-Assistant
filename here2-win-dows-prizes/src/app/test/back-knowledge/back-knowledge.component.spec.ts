import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackKnowledgeComponent } from './back-knowledge.component';

describe('BackKnowledgeComponent', () => {
  let component: BackKnowledgeComponent;
  let fixture: ComponentFixture<BackKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
