import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonModalComponent } from './json-modal.component';

describe('JsonModalComponent', () => {
  let component: JsonModalComponent;
  let fixture: ComponentFixture<JsonModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonModalComponent]
    });
    fixture = TestBed.createComponent(JsonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
