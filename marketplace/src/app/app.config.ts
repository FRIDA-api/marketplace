import {
  ApplicationConfig,
  importProvidersFrom
} from '@angular/core';
import {
  InMemoryScrollingOptions,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling
} from '@angular/router';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';

export function createTranslateLoader(
  http: HttpClient,
) {
  return new TranslateHttpLoader(
    http,
    './assets/i18n/',
    '.json'
  );
}

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withInMemoryScrolling(scrollConfig)),
    provideHttpClient(withFetch()),
    importProvidersFrom([
      TranslateModule.forRoot({
        defaultLanguage: 'de',
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      }),
    ]),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
    provideAnimations(),
  ],
};
