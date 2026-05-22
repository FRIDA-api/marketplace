import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LivedemoTabComponent } from './livedemo-tab.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('LivedemoTabComponent', () => {
  let component: LivedemoTabComponent;
  let fixture: ComponentFixture<LivedemoTabComponent>

  const mockData = {
    apiInformation: {
      id: "pension-api",
      languageKey: "PENSION_API",
      iconPath: "./assets/icons/icon-pensionapi.svg",
      tags: [ "PENSION" ],
      githubLink: "https://github.com/FRIDA-api/FRIDA-pension",
      swaggerPath: "/assets/api/pension-api.yaml"
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => null } } }},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LivedemoTabComponent) ;
    component = fixture.componentInstance;
    fixture.componentRef.setInput('apiInformation', mockData.apiInformation);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show github button', () => {
    fixture.componentRef.setInput('apiInformation', {
      id: "",
      languageKey: "",
      iconPath: "",
      tags: [],
      githubLink: "github-link",
      livedemoLink: "https://demo-link"
    });
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css("#view-on-github-container"))).not.toBeNull();
  });

  it('should not show github button', () => {
    fixture.componentRef.setInput('apiInformation', {
      id: "",
      languageKey: "",
      iconPath: "",
      tags: [],
      githubLink: "",
      swaggerPath: ""
    });
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css("#view-on-github-container"))).toBeNull();
  });

  it('should show coming soon text', () => {
    fixture.componentRef.setInput('apiInformation', {
      id: "",
      languageKey: "",
      iconPath: "",
      tags: [],
      githubLink: "",
      livedemoLink: ""
    });
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#no-livedemo-container'))).not.toBeNull();
  });

  it('should not show coming soon text', () => {
    fixture.componentRef.setInput('apiInformation', {
      id: "",
      languageKey: "",
      iconPath: "",
      tags: [],
      githubLink: "",
      livedemoLink: "https://demo-link"
    });
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#no-livedemo-container'))).toBeNull();
  });
});
