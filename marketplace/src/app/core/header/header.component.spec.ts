import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  MockBuilder,
  MockRender,
  MockService,
  MockedComponentFixture,
} from 'ng-mocks';
import { HeaderComponent } from './header.component';

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

  it('should set browser language to "de"', ()=> {
    spyOn(component.translate, 'getBrowserLang').and.returnValue(undefined);
    spyOn(component.translate, 'use');
    component.ngOnInit()
    expect(component.translate.use).toHaveBeenCalledWith('de');
  })

  it('should set browser language to "en"', ()=> {
    spyOn(component.translate, 'getBrowserLang').and.returnValue('fr');
    spyOn(component.translate, 'use');
    component.ngOnInit()
    expect(component.translate.use).toHaveBeenCalledWith('en');
  })
});
