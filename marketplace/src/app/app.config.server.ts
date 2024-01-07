import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true
      })
    ),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
