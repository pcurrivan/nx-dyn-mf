import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { PluginsModule } from '@nx-dyn-mf/plugins';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      {
        path: '',
        loadComponent: () => import('@nx-dyn-mf/home').then(m => m.HomeComponent)
      }
    ]),
  ],
};
