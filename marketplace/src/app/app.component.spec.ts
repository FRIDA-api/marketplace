import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { MockedComponentFixture, MockBuilder, MockService, MockRender } from 'ng-mocks';
import { fromEvent } from 'rxjs';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: MockedComponentFixture;

  beforeEach(() =>
    MockBuilder(AppComponent)
      .keep(TranslateModule.forRoot())
      .provide({
        provide: ActivatedRoute,
        useValue: MockService(ActivatedRoute),
      })
      .then(() => {
        fixture = MockRender(AppComponent);
        component = fixture.point.componentInstance;
      })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should update scrollPosition when element is scrolled', () => {
    const scrollEvent = new Event('scroll');
    const scrollTop = 100;

    spyOnProperty(component.el.nativeElement, 'scrollTop', 'get').and.returnValue(scrollTop);
    fromEvent(component.el.nativeElement, 'scroll')
      //.pipe(takeUntilDestroyed(component['destroyRef']))
      .subscribe(() => {
        expect(component.scrollPosition).toBe(scrollTop);
      });
    component.el.nativeElement.dispatchEvent(scrollEvent);
  });
  xit('should set scrollTop to 0 when backToTop is called', () => {
    const scrollTop = 100;
    component.el.nativeElement.scrollTop = scrollTop;
    component.backToTop();
    expect(component.el.nativeElement.scrollTop).toBe(0);
  });
});
