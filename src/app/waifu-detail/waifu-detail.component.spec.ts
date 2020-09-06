import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaifuDetailComponent } from './waifu-detail.component';

describe('WaifuDetailComponent', () => {
  let component: WaifuDetailComponent;
  let fixture: ComponentFixture<WaifuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaifuDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaifuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
