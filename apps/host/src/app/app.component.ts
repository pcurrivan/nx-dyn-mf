import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { PluginsService } from '@nx-dyn-mf/plugins'
import { appConfig } from './app.config';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterOutlet
  ],
  selector: 'app-root',
  template: `
    <h1>App</h1>
    <router-outlet><router-outlet>
  `,
})
export class AppComponent {}
