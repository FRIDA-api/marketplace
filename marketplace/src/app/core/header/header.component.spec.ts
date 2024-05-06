import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  MockBuilder,
  MockRender,
  MockService,
  MockedComponentFixture,
} from 'ng-mocks';
import { HeaderComponent } from './header.component';
import {By} from "@angular/platform-browser";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: MockedComponentFixture;

  beforeEach(() =>
    MockBuilder(HeaderComponent)
      .keep(TranslateModule.forRoot())
      .provide({
        provide: ActivatedRoute,
        useValue: MockService(ActivatedRoute),
      })
      .then(() => {
        fixture = MockRender(HeaderComponent);
        component = fixture.point.componentInstance;
      })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set browser language to "en" when "de" value is set', ()=> {
    spyOnProperty(component.translate, 'currentLang').and.returnValue('de');
    spyOn(component.translate, 'use');
    component.switchLanguage()
    expect(component.translate.use).toHaveBeenCalledWith('en');
  });

  it('should set browser language to "de" when "en" value is set', ()=> {
    spyOnProperty(component.translate, 'currentLang').and.returnValue('en');
    spyOn(component.translate, 'use');
    component.switchLanguage()
    expect(component.translate.use).toHaveBeenCalledWith('de');
  });

  it('should show usa flag when "de" is the current language', ()=> {
    spyOnProperty(component.translate, 'currentLang').and.returnValue('de');
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#en-flag'))).not.toBeUndefined();
  });

  it('should show german flag when "en" is the current language', ()=> {
    spyOnProperty(component.translate, 'currentLang').and.returnValue('en');
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#de-flag'))).not.toBeUndefined();
  });
});
